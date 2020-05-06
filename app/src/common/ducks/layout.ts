/** Grid layout duck */

import _ from "lodash";
import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { put, select, takeEvery } from "redux-saga/effects";
import { Layout as ReactGridLayout } from "react-grid-layout";

import widgets from "widgets";
import { createWidget, removeWidget } from "components/widget/duck";
import { importState } from "common/ducks/state";

const saveLayout = createAction<Layout>("layout/save");
const toggleLayoutEditable = createAction<void>("layout/toggle-editable");
const addWidgetToLayout = createAction<string>("layout/add-widget");
const removeWidgetFromLayout = createAction<string>("layout/remove-widget");
const incrementNextWidgetId = createAction<void>(
  "layout/increment-next-widget-id"
);

export interface Layout {
  mobile: ReactGridLayout[];
  desktop: ReactGridLayout[];

  readonly [key: string]: ReactGridLayout[];
}

export interface LayoutState {
  isEditable: boolean;
  config: Layout;
  nextWidgetId: number;
}

export const initialState = {
  isEditable: false,
  config: { mobile: [], desktop: [] },
  nextWidgetId: 100
};

const widgetId = (type: string, id: number) => `${type}-${id}`;

const newWidgetY = (state: LayoutState) => {
  const max = _.maxBy(state.config.desktop, value => value.y + value.h);
  if (!max) return 0;
  return max.y + max.h;
};

export const reducerWithInitialState = (state: LayoutState = initialState) =>
  createReducer<LayoutState>(state, builder =>
    builder
      .addCase(importState, (state, action) => action.payload.layout)

      .addCase(saveLayout, (state, action) => {
        state.config = action.payload;
      })

      .addCase(toggleLayoutEditable, state => {
        state.isEditable = !state.isEditable;
      })

      .addCase(addWidgetToLayout, (state, action) => {
        const newWidget = {
          i: widgetId(action.payload, state.nextWidgetId),
          x: 0,
          y: newWidgetY(state),
          w: widgets[action.payload].initialWidth,
          h: widgets[action.payload].initialHeight
        };
        state.config = {
          mobile: [...state.config.mobile, newWidget],
          desktop: [...state.config.desktop, newWidget]
        };
      })

      .addCase(removeWidgetFromLayout, (state, action) => {
        const byId = (widget: ReactGridLayout) => widget.i !== action.payload;
        state.config = {
          mobile: _.filter(state.config.mobile, byId),
          desktop: _.filter(state.config.desktop, byId)
        };
      })

      .addCase(incrementNextWidgetId, state => {
        state.nextWidgetId = state.nextWidgetId + 1;
      })
  );

const selectNextWidgetId = (state: { layout: LayoutState }) =>
  state.layout.nextWidgetId;

/* When a new widget is added, create the according widget data and update the widget counter */
function* addWidgetSaga(action: PayloadAction<string>) {
  const nextWidgetId = yield select(selectNextWidgetId);
  yield put(
    createWidget({
      type: action.payload,
      id: widgetId(action.payload, nextWidgetId)
    })
  );
  yield put(incrementNextWidgetId());
}

/* When a widget is removed from the layout, the according widget data should be deleted as well */
function* removeWidgetSaga(action: PayloadAction<string>) {
  yield put(removeWidget(action.payload));
}

export function* saga() {
  yield takeEvery(addWidgetToLayout.toString(), addWidgetSaga);
  yield takeEvery(removeWidgetFromLayout.toString(), removeWidgetSaga);
}

export const actionCreators = {
  saveLayout,
  toggleLayoutEditable,
  addWidgetToLayout,
  removeWidgetFromLayout,
  incrementNextWidgetId
};
