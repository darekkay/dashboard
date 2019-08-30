/** Grid layout duck */

import _ from "lodash";
import { createAction, createReducer } from "redux-starter-kit";
import { ofType, combineEpics, Epic } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";
import { Layout as ReactGridLayout } from "react-grid-layout";

import { initialLayout } from "widgets/demo";
import { createWidget, removeWidget } from "components/widget/duck";

const saveLayout = createAction("layout/save");
const toggleLayoutEditable = createAction("layout/toggle-editable");
const addWidgetToLayout = createAction("layout/add-widget");
const removeWidgetFromLayout = createAction("layout/remove-widget");
const incrementNextWidgetId = createAction("layout/increment-next-widget-id");

export interface Layout {
  mobile: ReactGridLayout[];
  desktop: ReactGridLayout[];

  [key: string]: ReactGridLayout[];
}

export interface LayoutState {
  isEditable: boolean;
  config: Layout;
  nextWidgetId: number;
}

export const initialState = {
  isEditable: false,
  config: initialLayout,
  nextWidgetId: 100
};

const widgetId = (type: string, id: number) => `${type}-${id}`;

const newWidgetY = (state: LayoutState) => {
  const max = _.maxBy(state.config.desktop, value => value.y + value.h);
  if (!max) return 0;
  return max.y + max.h;
};

export const reducerWithInitialState = (state: LayoutState = initialState) =>
  createReducer(state, {
    [saveLayout as any]: (state, action) => ({
      ...state,
      config: action.payload
    }),

    [toggleLayoutEditable as any]: (state, action) => {
      state.isEditable = !state.isEditable;
    },

    [addWidgetToLayout as any]: (state, action) => {
      const newWidget = {
        i: widgetId(action.payload, state.nextWidgetId),
        x: 0,
        y: newWidgetY(state),
        w: 1,
        h: 1
      };
      return {
        ...state,
        config: {
          mobile: [...state.config.mobile, newWidget],
          desktop: [...state.config.desktop, newWidget]
        }
      };
    },

    [removeWidgetFromLayout as any]: (state, action) => {
      const byId = (widget: ReactGridLayout) => widget.i !== action.payload;
      return {
        ...state,
        config: {
          mobile: _.filter(state.config.mobile, byId),
          desktop: _.filter(state.config.desktop, byId)
        }
      };
    },

    [incrementNextWidgetId as any]: (state, action) => ({
      ...state,
      nextWidgetId: state.nextWidgetId + 1
    })
  });

/* When a new widget is added, create the according widget data and update the widget counter */
const addWidgetEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(addWidgetToLayout),
    mergeMap(action => [
      createWidget({
        type: action.payload,
        id: widgetId(action.payload, state$.value.layout.nextWidgetId)
      }),
      incrementNextWidgetId()
    ])
  );

/* When a widget is removed from the layout, the according widget data should be deleted as well */
const removeWidgetEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(removeWidgetFromLayout),
    map(action => removeWidget(action.payload))
  );

export const epic = combineEpics(addWidgetEpic, removeWidgetEpic);

export const actionCreators = {
  saveLayout,
  toggleLayoutEditable,
  addWidgetToLayout,
  removeWidgetFromLayout
};
