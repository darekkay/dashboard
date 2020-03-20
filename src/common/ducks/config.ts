/** Application settings */

import { createAction, createReducer } from "@reduxjs/toolkit";
import { Theme } from "components/settings/theme-select";

export interface ConfigState {
  theme: string;
  language: string;
}

const changeTheme = createAction<string>("config/change-theme");
export const changeLanguage = createAction<string>("config/change-language");

export const defaultTheme = (): Theme =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
    ? "dark"
    : "default";

export const initialState = {
  theme: defaultTheme(),
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
