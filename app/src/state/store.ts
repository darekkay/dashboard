import { createStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { IS_PRODUCTION, IS_STORAGE_PAUSED } from "common/environment";
import { ConfigState } from "common/ducks/config";
import { LayoutState } from "common/ducks/layout";
import { WidgetsState } from "components/widget/duck";

import { persistReducer, persistStore, pause } from "./localStorage";
import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";

export const STATE_PROPERTIES = ["config", "layout", "widgets"];

export interface State {
  config: ConfigState;
  layout: LayoutState;
  widgets: WidgetsState;

  readonly [key: string]: any;
}

const initStore = (initialState?: State) => {
  // TODO: replace with "configureStore"?
  // https://redux.js.org/recipes/configuring-your-store#simplifying-setup-with-redux-toolkit
  const composeEnhancers = composeWithDevTools({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !IS_PRODUCTION,
    actionsBlacklist: [],
  });

  const sagaMiddleware = createSagaMiddleware();

  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(
    persistReducer(rootReducer(initialState)),
    enhancers
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  /* istanbul ignore next */
  if (IS_STORAGE_PAUSED) {
    pause(persistor);
  }

  return {
    store,
    persistor,
    purgeStore: () => {
      persistor.purge().then(() => window.location.reload());
    },
  };
};

export default initStore;
