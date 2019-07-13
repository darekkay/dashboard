/** Grid layout duck */

import { createAction, createReducer } from "redux-starter-kit";
import { Layout as ReactGridLayout } from "react-grid-layout";

import { initialLayout } from "widgets/demo";

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
  config: initialLayout
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
