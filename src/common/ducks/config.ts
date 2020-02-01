/** Application settings */

import { createAction, createReducer } from "redux-starter-kit";

export interface ConfigState {
  theme: string;
  language: string;
}

const changeTheme = createAction<string>("config/change-theme");
export const changeLanguage = createAction<string>("config/change-language");

export const initialState = {
  theme: "default",
  language: "" // let i18next use the correct language
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
