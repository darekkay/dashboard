/** Widget duck */

import { createReducer } from "redux-starter-kit";

export interface Widget {
  width: number;
  height: number;
  type: string;
  options?: object;
}

export interface WidgetsState {
  [key: string]: Widget;
}

const initialState = {
  "id-01": { width: 3, height: 3, type: "text" },
  "id-02": { width: 3, height: 1, type: "text" },
  "id-03": { width: 3, height: 1, type: "text" },
  "id-04": { width: 3, height: 1, type: "text" },
  "id-05": { width: 2, height: 1, type: "empty" },
  "id-06": {
    width: 4,
    height: 1,
    type: "text",
    options: {
      content: "Hello World!"
    }
  },
  "id-07": { width: 1, height: 1, type: "text" },
  "id-08": { width: 2, height: 2, type: "text" },
  "id-09": { width: 3, height: 1, type: "text" },
  "id-10": { width: 2, height: 1, type: "text" },
  "id-11": { width: 2, height: 1, type: "text" }
};

export const reducerWithInitialState = (state: WidgetsState = initialState) =>
  createReducer(state, {
    // TODO: add actions
  });

export const actionCreators = {
  // TODO: add action creators
};
