import { Reducer } from "redux";
import {
  createTransform,
  Persistor,
  persistReducer as _persistReducer,
  persistStore as _persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { Widget } from "components/widget/duck"; // localStorage for web and AsyncStorage for react-native

const blacklist: string[] = [];

/**
 * A widget can be trapped into a permanent "pending" status if the state is persisted while a widget is being loaded. This transform resets all pending states.
 */
export const resetPendingStatus = createTransform(
  // transform state on its way to being serialized and persisted
  (inboundState: Record<string, Widget>) => {
    return Object.entries(inboundState).reduce(
      (accumulator, [widgetId, widgetProperties]) => ({
        ...accumulator,
        [widgetId]: {
          ...widgetProperties,
          meta: {
            ...widgetProperties.meta,
            updateStatus:
              widgetProperties.meta.updateStatus === "pending"
                ? "idle"
                : widgetProperties.meta.updateStatus,
          },
        },
      }),
      {}
    );
  },
  // transform state being rehydrated
  undefined,
  { whitelist: ["widgets"] }
);

export const persistReducer = (reducer: Reducer) =>
  _persistReducer(
    {
      key: "root",
      storage,
      blacklist,
      throttle: 500,
      transforms: [resetPendingStatus],
    },
    reducer
  );

/* istanbul ignore next */
export const pause = (persistor: Persistor) => {
  persistor.purge().then(() => persistor.pause());
};

export const persistStore = _persistStore;
