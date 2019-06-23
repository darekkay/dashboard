/** Widget duck */

import { createAction, createReducer } from "redux-starter-kit";

const setOptionValue = createAction("widget/set-option-value");
const setDataValue = createAction("widget/set-data-value");

export interface Widget {
  width: number;
  height: number;
  type: string;
  options: {
    [key: string]: any;
  };
  data: {
    [key: string]: any;
  };
}

export interface WidgetsState {
  [key: string]: Widget;
}

export const initialState = {
  "date-time-01": {
    x: 0,
    y: 0,
    width: 3,
    height: 3,
    type: "date-time",
    data: {},
    options: {}
  },
  "search-02": {
    x: 3,
    y: 0,
    width: 3,
    height: 1,
    type: "search",
    data: {},
    options: {
      pattern: "https://duckduckgo.com/?q=%s",
      name: "DuckDuckGo"
    }
  },
  "text-03": {
    x: 6,
    y: 0,
    width: 3,
    height: 1,
    type: "text",
    data: {},
    options: {}
  },
  "text-04": {
    x: 9,
    y: 0,
    width: 3,
    height: 1,
    type: "text",
    data: {},
    options: {}
  },
  "text-05": {
    x: 5,
    y: 1,
    width: 4,
    height: 1,
    type: "text",
    data: {
      content: "Hello World!"
    },
    options: {}
  },
  "text-06": {
    x: 9,
    y: 1,
    width: 1,
    height: 1,
    type: "text",
    data: {},
    options: {}
  },
  "text-07": {
    x: 10,
    y: 1,
    width: 2,
    height: 2,
    type: "text",
    data: {},
    options: {}
  },
  "text-08": {
    x: 3,
    y: 2,
    width: 3,
    height: 1,
    type: "text",
    data: {},
    options: {}
  },
  "text-09": {
    x: 6,
    y: 2,
    width: 2,
    height: 1,
    type: "text",
    data: {},
    options: {}
  },
  "text-10": {
    x: 8,
    y: 2,
    width: 2,
    height: 1,
    type: "text",
    data: {},
    options: {}
  }
};

export const reducerWithInitialState = (state: WidgetsState = initialState) =>
  createReducer(state, {
    [setOptionValue as any]: (state, action) => {
      const { id, key, value } = action.payload;
      state[id].options[key] = value;
    },
    [setDataValue as any]: (state, action) => {
      const { id, key, value } = action.payload;
      state[id].data[key] = value;
    }
  });

export const actionCreators = {
  setOptionValue,
  setDataValue
};
