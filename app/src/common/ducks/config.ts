/** Application settings */

import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "redux-saga/effects";

import { State } from "state/store";
import { Theme } from "components/settings/theme-select";
import { importState } from "common/ducks/state";
import { IS_DEVELOPMENT } from "common/environment";

export interface ConfigState {
  theme: string;
  language: string;
}

const changeTheme = createAction<string>("config/change-theme");
export const changeLanguage = createAction<string>("config/change-language");

export const defaultTheme = (): Theme => {
  if (IS_DEVELOPMENT) {
    return "default";
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
    ? "dark"
    : "default";
};

export const initialState = {
  theme: defaultTheme(),
  language: "", // let i18next use the correct language
};

export const reducerWithInitialState = (state: ConfigState = initialState) =>
  createReducer<ConfigState>(state, (builder) =>
    builder
      .addCase(importState, (state, action) => action.payload.config)

      .addCase(changeTheme, (state, action) => {
        state.theme = action.payload;
      })

      .addCase(changeLanguage, (state, action) => {
        state.language = action.payload;
      })
  );

function* updateLanguage(action: PayloadAction<State>) {
  yield put(changeLanguage(action.payload.config.language));
}

export function* saga() {
  yield takeEvery(importState.toString(), updateLanguage);
}

export const actionCreators = {
  changeTheme,
  changeLanguage,
};
