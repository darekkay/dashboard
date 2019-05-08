/** Widget duck */

import { createAction, createReducer } from "redux-starter-kit";

const setOption = createAction("widget/set-option");

export interface Widget {
  width: number;
  height: number;
  type: string;
  options: {
    [key: string]: any;
  };
}

export interface WidgetsState {
  [key: string]: Widget;
}

export const initialState = {
  "id-01": { x: 0, y: 0, width: 3, height: 3, type: "text", options: {} },
  "id-02": { x: 3, y: 0, width: 3, height: 1, type: "text", options: {} },
  "id-03": { x: 6, y: 0, width: 3, height: 1, type: "text", options: {} },
  "id-04": { x: 9, y: 0, width: 3, height: 1, type: "text", options: {} },
  "id-05": {
    x: 5,
    y: 1,
    width: 4,
    height: 1,
    type: "text",
    options: {
      content: "Hello World!"
    }
  },
  "id-06": { x: 9, y: 1, width: 1, height: 1, type: "text", options: {} },
  "id-07": { x: 10, y: 1, width: 2, height: 2, type: "text", options: {} },
  "id-08": { x: 3, y: 2, width: 3, height: 1, type: "text", options: {} },
  "id-09": { x: 6, y: 2, width: 2, height: 1, type: "text", options: {} },
  "id-10": { x: 8, y: 2, width: 2, height: 1, type: "text", options: {} }
};

export const reducerWithInitialState = (state: WidgetsState = initialState) =>
  createReducer(state, {
    [setOption as any]: (state, action) => {
      const { id, key, value } = action.payload;
      state[id].options[key] = value;
    }
  });

export const actionCreators = {
  setOption
};
