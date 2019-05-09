import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducerWithInitialState as heartbeatReducer } from "common/ducks/heartbeat";
import {
  ConfigState,
  reducerWithInitialState as settingsReducer
} from "common/ducks/settings";
import {
  WidgetsState,
  reducerWithInitialState as widgetReducer
} from "components/widget/duck";

import { persistReducer, persistStore, pause } from "./storage";

export interface State {
  heartbeat: number;
  config: ConfigState;
  widgets: WidgetsState;

  [key: string]: any;
}

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_PAUSED = false;

const initStore = () => {
  const rootReducer = combineReducers({
    heartbeat: heartbeatReducer(),
    config: settingsReducer(),
    widgets: widgetReducer()
  });

  const store = createStore(
    persistReducer(rootReducer),
    composeWithDevTools({
      // Enable capture of stack traces for dispatched Redux actions
      trace: !IS_PRODUCTION
    })()
  );

  const persistor = persistStore(store);
  if (IS_PAUSED) {
    pause(persistor);
  }

  return { store, persistor };
};

export default initStore;
