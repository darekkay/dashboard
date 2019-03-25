import { configureStore } from "redux-starter-kit";

import {
  Config,
  reducerWithInitialState as settingsReducer
} from "common/ducks/settings";

export interface State {
  config: Config;
  [key: string]: any;
}

const initStore = (initialState: State) =>
  configureStore({
    reducer: {
      config: settingsReducer(initialState.config) /* Rename to settings */
    },
    preloadedState: initialState
  });

export default initStore;
