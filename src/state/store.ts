import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { IS_PRODUCTION, IS_STORAGE_PAUSED } from "common/environment";
import { ConfigState } from "common/ducks/config";
import { WidgetsState } from "components/widget/duck";

import { persistReducer, persistStore, pause } from "./localStorage";
import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";

interface DataState {
  [key: string]: any;
}

export interface State {
  config: ConfigState;
  widgets: WidgetsState;
  sharedData: DataState;

  readonly [key: string]: any;
}

const initStore = () => {
  const composeEnhancers = composeWithDevTools({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !IS_PRODUCTION,
    actionsBlacklist: []
  });

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistReducer(rootReducer),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  /* istanbul ignore next */
  if (IS_STORAGE_PAUSED) {
    pause(persistor);
  }

  return {
    store,
    persistor,
    purgeStore: () => {
      persistor.purge().then(() => window.location.reload());
    }
  };
};

export default initStore;
