import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { IS_STORAGE_PAUSED } from "common/environment";
import type { ConfigState } from "common/ducks/config";
import type { LayoutState } from "common/ducks/layout";
import type { WidgetsState } from "components/widget/duck";

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
      // TODO: check deprecation recommendation
      ...getDefaultMiddleware({
        thunk: false,
        immutableCheck: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    ],
    devTools: {
      // TODO: check deprecation recommendation
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
