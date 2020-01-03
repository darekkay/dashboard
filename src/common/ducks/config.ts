/** Application settings */

import { createAction, createReducer } from "redux-starter-kit";
import { defaultLanguage } from "common/i18n";

export interface ConfigState {
  grid: {
    columns: number;
  };
  theme: string;
  language: string;
}

const changeTheme = createAction<string>("config/change-theme");
const changeLanguage = createAction<string>("config/change-language");

export const initialState = {
  grid: {
    columns: 12
  },
  theme: "default",
  language: defaultLanguage()
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
