/** Application settings */

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "typed-redux-saga";
import isEmpty from "lodash/isEmpty";

import type { State } from "state/store";
import type { Theme } from "components/settings/theme-select";
import { importState } from "common/ducks/state";

export interface ConfigState {
  theme: string;
  language: string;
  backgroundUrl: string;
}

export const defaultTheme = (): Theme => {
  // theme is stored in the DOM prior to the app script being executed
  const initialTheme = document.body.dataset.theme;
  if (initialTheme === "default" || initialTheme === "dark") {
    return initialTheme;
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "default";
};

export const initialState: ConfigState = {
  theme: defaultTheme(),
  language: "", // let i18next use the correct language
  backgroundUrl: "",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeBackgroundUrl(state, action: PayloadAction<string>) {
      state.backgroundUrl = action.payload;
    },

    changeTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },

    changeLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(importState, (state, action) => {
      // preserve current user settings if they are missing in the imported state
      if (!isEmpty(action.payload.config.theme))
        state.theme = action.payload.config.theme;
      if (!isEmpty(action.payload.config.language))
        state.language = action.payload.config.language;

      state.backgroundUrl = action.payload.config.backgroundUrl;
    });
  },
});

export const { reducer, actions } = configSlice;

function* updateLanguage(action: PayloadAction<State>) {
  yield* put(actions.changeLanguage(action.payload.config.language));
}

export function* saga() {
  yield* takeEvery(importState.toString(), updateLanguage);
}
