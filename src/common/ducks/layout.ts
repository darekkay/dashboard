/** Grid layout duck */

import { createAction, createReducer } from "redux-starter-kit";
import { Layout as ReactGridLayout } from "react-grid-layout";

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
    mobile: [],
    desktop: [
      {
        i: "date-time-01",
        x: 0,
        y: 0,
        w: 3,
        h: 3
      },
      {
        i: "text-02",
        x: 3,
        y: 0,
        w: 3,
        h: 1
      },
      {
        i: "text-03",
        x: 6,
        y: 0,
        w: 3,
        h: 1
      },
      {
        i: "text-04",
        x: 9,
        y: 0,
        w: 3,
        h: 1
      },
      {
        i: "text-05",
        x: 5,
        y: 1,
        w: 4,
        h: 1
      },
      {
        i: "text-06",
        x: 9,
        y: 1,
        w: 1,
        h: 1
      },
      {
        i: "text-07",
        x: 10,
        y: 1,
        w: 2,
        h: 2
      },
      {
        i: "text-08",
        x: 3,
        y: 2,
        w: 3,
        h: 1
      },
      {
        i: "text-09",
        x: 6,
        y: 2,
        w: 2,
        h: 1
      },
      {
        i: "text-10",
        x: 8,
        y: 2,
        w: 2,
        h: 1
      }
    ]
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
