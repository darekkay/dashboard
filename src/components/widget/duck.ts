/** Widget duck */

import { createReducer } from "redux-starter-kit";

export interface WidgetState {
  width: number;
  height: number;
  type: string;
  options?: object;
}

// TODO: change to ID → widget
const initialState = [
  { width: 3, height: 3, type: "text" },
  { width: 3, height: 1, type: "text" },
  { width: 3, height: 1, type: "text" },
  { width: 3, height: 1, type: "text" },
  { width: 2, height: 1, type: "empty" },
  {
    width: 4,
    height: 1,
    type: "text",
    options: {
      content: "Hello World!"
    }
  },
  { width: 1, height: 1, type: "text" },
  { width: 2, height: 2, type: "text" },
  { width: 3, height: 1, type: "text" },
  { width: 2, height: 1, type: "text" },
  { width: 2, height: 1, type: "text" }
];

export const reducerWithInitialState = (state: WidgetState[] = initialState) =>
  createReducer(state, {
    // TODO: add actions
  });

export const actionCreators = {
  // TODO: add action creators
};
