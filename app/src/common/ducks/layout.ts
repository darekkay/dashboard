/** Grid layout duck */

import maxBy from "lodash/maxBy";
import filter from "lodash/filter";
import clone from "lodash/clone";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { put, select, takeEvery } from "typed-redux-saga";
import { Layout as ReactGridLayout } from "react-grid-layout";

import widgets from "widgets";
import { actions as widgetActions } from "components/widget/duck";
import { importState } from "common/ducks/state";
import { WidgetType } from "widgets/list";

export interface Layout {
  mobile: ReactGridLayout[];
  desktop: ReactGridLayout[];

  readonly [key: string]: ReactGridLayout[];
}

export interface LayoutState {
  config: Layout;
  nextWidgetId: number;
}

export const initialState: LayoutState = {
  config: { mobile: [], desktop: [] },
  nextWidgetId: 100,
};

const widgetId = (type: WidgetType, id: number) => `${type}-${id}`;

const newWidgetY = (state: LayoutState) => {
  const max = maxBy(state.config.desktop, (value) => value.y + value.h);
  if (!max) return 0;
  return max.y + max.h;
};

const widgetSortOrder = (
  widgetA: ReactGridLayout.Layout,
  widgetB: ReactGridLayout.Layout
) => {
  if (widgetA.y === widgetB.y) {
    return widgetA.x - widgetB.x;
  } else {
    return widgetA.y - widgetB.y;
  }
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    saveLayout(state, action: PayloadAction<Layout>) {
      state.config = {
        ...action.payload,

        // sort widgets by columns/rows (meaningful focus order)
        // we need to clone the array, as the array is immutable and sort is mutating
        // mobile isn't sorted, as we're not using its order
        desktop: clone(action.payload.desktop).sort(widgetSortOrder),
      };
    },
    addWidgetToLayout(state, action: PayloadAction<WidgetType>) {
      const newWidget = {
        i: widgetId(action.payload, state.nextWidgetId),
        x: 0,
        y: newWidgetY(state),
        w: widgets[action.payload].initialWidth,
        h: widgets[action.payload].initialHeight,
      };
      state.config = {
        mobile: [...state.config.mobile, newWidget],
        desktop: [...state.config.desktop, newWidget],
      };
    },
    removeWidgetFromLayout(state, action: PayloadAction<string>) {
      const byId = (widget: ReactGridLayout) => widget.i !== action.payload;
      state.config = {
        mobile: filter(state.config.mobile, byId),
        desktop: filter(state.config.desktop, byId),
      };
    },
    incrementNextWidgetId(state) {
      state.nextWidgetId = state.nextWidgetId + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(importState, (_state, action) => action.payload.layout);
  },
});

export const { reducer, actions } = layoutSlice;

const selectNextWidgetId = (state: { layout: LayoutState }) =>
  state.layout.nextWidgetId;

/* When a new widget is added, create the according widget data and update the widget counter */
function* addWidgetSaga(action: PayloadAction<WidgetType>) {
  const nextWidgetId = yield* select(selectNextWidgetId);
  yield* put(
    widgetActions.createWidget({
      type: action.payload,
      id: widgetId(action.payload, nextWidgetId),
    })
  );
  yield* put(actions.incrementNextWidgetId());
}

/* When a widget is removed from the layout, the according widget data should be deleted as well */
function* removeWidgetSaga(action: PayloadAction<string>) {
  yield* put(widgetActions.removeWidget(action.payload));
}

export function* saga() {
  yield* takeEvery(actions.addWidgetToLayout.toString(), addWidgetSaga);
  yield* takeEvery(actions.removeWidgetFromLayout.toString(), removeWidgetSaga);
}
