/** Application settings */

import { createAction, createReducer } from "redux-starter-kit";

export interface Config {
  grid: {
    rows: number;
    columns: number;
  };
  widgets: {
    width: number;
    height: number;
    type: string;
    options?: object;
  }[];
  theme: string;
}

const changeTheme = createAction("theme-select/change");

export const reducerWithInitialState = (initialState: Config) =>
  createReducer(initialState, {
    [changeTheme as any]: (state, action) => ({
      ...state,
      theme: action.payload
    })
  });

export const actionCreators = {
  changeTheme
};


