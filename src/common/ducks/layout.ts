/** Grid layout duck */

import { createAction, createReducer } from "redux-starter-kit";
import { Layout as ReactGridLayout } from "react-grid-layout";

import { initialState as widgets } from "components/widget/duck";

const saveLayout = createAction("layout/save");
const toggleLayoutEditable = createAction("layout/toggle-editable");

export interface Layout {
  mobile: ReactGridLayout[];
  desktop: ReactGridLayout[];

  [key: string]: ReactGridLayout[];
}

export interface LayoutState {
  isEditable: boolean;
  config: Layout;
}

export const initialState = {
  isEditable: false,
  config: {
    mobile: Object.entries(widgets).map(([key, widget], index) => ({
      i: key,
      x: 0,
      y: index,
      w: 1,
      h: 1
    })),

    desktop: Object.entries(widgets).map(([key, widget]) => ({
      i: key,
      x: widget.x,
      y: widget.y,
      w: widget.width,
      h: widget.height
    }))
  }
};

export const reducerWithInitialState = (state: LayoutState = initialState) =>
  createReducer(state, {
    [saveLayout as any]: (state, action) => ({
      ...state,
      config: action.payload
    }),
    [toggleLayoutEditable as any]: (state, action) => {
      state.isEditable = !state.isEditable;
    }
  });

export const actionCreators = {
  saveLayout,
  toggleLayoutEditable
};
