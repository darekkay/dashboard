/** Application settings */

import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "typed-redux-saga";
import isEmpty from "lodash/isEmpty";

import { State } from "state/store";
import { Theme } from "components/settings/theme-select";
import { importState } from "common/ducks/state";
import { IS_DEVELOPMENT } from "common/environment";

export interface ConfigState {
  theme: string;
  language: string;
  backgroundUrl: string;
}

const changeBackgroundUrl = createAction<string>(
  "config/change-background-url"
);
const changeTheme = createAction<string>("config/change-theme");
export const changeLanguage = createAction<string>("config/change-language");

export const defaultTheme = (): Theme => {
  /* istanbul ignore next */
  if (IS_DEVELOPMENT) {
    return "default";
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)")
    ? "dark"
    : "default";
};

export const initialState: ConfigState = {
  theme: defaultTheme(),
  language: "", // let i18next use the correct language
  backgroundUrl: "",
};

export const reducerWithInitialState = (
  defaultState: ConfigState = initialState
) =>
  createReducer<ConfigState>(defaultState, (builder) =>
    builder
      .addCase(importState, (state, action) => {
        // preserve current user settings if they are missing in the imported state
        if (!isEmpty(action.payload.config.theme))
          state.theme = action.payload.config.theme;
        if (!isEmpty(action.payload.config.language))
          state.language = action.payload.config.language;

        state.backgroundUrl = action.payload.config.backgroundUrl;
      })

      .addCase(changeBackgroundUrl, (state, action) => {
        state.backgroundUrl = action.payload;
      })

      .addCase(changeTheme, (state, action) => {
        state.theme = action.payload;
      })

      .addCase(changeLanguage, (state, action) => {
        state.language = action.payload;
      })
  );

function* updateLanguage(action: PayloadAction<State>) {
  yield* put(changeLanguage(action.payload.config.language));
}

export function* saga() {
  yield* takeEvery(importState.toString(), updateLanguage);
}

export const actionCreators = {
  changeBackgroundUrl,
  changeTheme,
  changeLanguage,
};
