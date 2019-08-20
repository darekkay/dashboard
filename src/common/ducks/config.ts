/** Application settings */

import { createAction, createReducer } from "redux-starter-kit";

export interface ConfigState {
  grid: {
    columns: number;
  };
  theme: string;
  language: string;
}

const changeTheme = createAction("config/change-theme");
const changeLanguage = createAction("config/change-language");

export const initialState = {
  grid: {
    columns: 12
  },
  theme: "default",
  language: "en"
};

export const reducerWithInitialState = (state: ConfigState = initialState) =>
  createReducer(state, {
    [changeTheme as any]: (state, action) => ({
      ...state,
      theme: action.payload
    }),
    [changeLanguage as any]: (state, action) => ({
      ...state,
      language: action.payload
    })
  });

export const actionCreators = {
  changeTheme,
  changeLanguage
};
