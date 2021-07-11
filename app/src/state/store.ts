import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { IS_STORAGE_PAUSED } from "common/environment";
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

const initStore = (preloadedState?: State) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: persistReducer(rootReducer),
    preloadedState,
    middleware: [
      sagaMiddleware,
      ...getDefaultMiddleware({
        thunk: false,
        immutableCheck: true,
        serializableCheck: true,
      }),
    ],
    devTools: {
      actionsBlacklist: [],
    },
  });

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
