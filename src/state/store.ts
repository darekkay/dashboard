import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { ConfigState } from "common/ducks/settings";
import { WidgetsState } from "components/widget/duck";
import { sendHeartbeat } from "../common/ducks/heartbeat";

import { persistReducer, persistStore, pause } from "./localStorage";
import { rootReducer } from "./reducers";
import { rootEpic } from "./epics";

interface DataState {
  [key: string]: any;
}

export interface State {
  heartbeat: number;
  config: ConfigState;
  widgets: WidgetsState;
  sharedData: DataState;

  [key: string]: any;
}

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_PAUSED = false;

const initStore = () => {
  const composeEnhancers = composeWithDevTools({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !IS_PRODUCTION,
    actionsBlacklist: [sendHeartbeat.toString()]
  });

  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    persistReducer(rootReducer),
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store);

  /* istanbul ignore next */
  if (IS_PAUSED) {
    pause(persistor);
  }

  return { store, persistor };
};

export default initStore;
