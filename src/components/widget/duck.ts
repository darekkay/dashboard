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

const initialState = {
  "id-01": { width: 3, height: 3, type: "text", options: {} },
  "id-02": { width: 3, height: 1, type: "text", options: {} },
  "id-03": { width: 3, height: 1, type: "text", options: {} },
  "id-04": { width: 3, height: 1, type: "text", options: {} },
  "id-05": { width: 2, height: 1, type: "empty", options: {} },
  "id-06": {
    width: 4,
    height: 1,
    type: "text",
    options: {
      content: "Hello World!"
    }
  },
  "id-07": { width: 1, height: 1, type: "text", options: {} },
  "id-08": { width: 2, height: 2, type: "text", options: {} },
  "id-09": { width: 3, height: 1, type: "text", options: {} },
  "id-10": { width: 2, height: 1, type: "text", options: {} },
  "id-11": { width: 2, height: 1, type: "text", options: {} }
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
