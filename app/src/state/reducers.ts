import { combineReducers } from "redux";

import { State } from "state/store";
import { reducerWithInitialState as configReducer } from "common/ducks/config";
import { reducerWithInitialState as layoutReducer } from "common/ducks/layout";
import { reducerWithInitialState as widgetReducer } from "components/widget/duck";

export const rootReducer = (initialState?: State) =>
  combineReducers({
    config: configReducer(initialState?.config),
    widgets: widgetReducer(initialState?.widgets),
    layout: layoutReducer(initialState?.layout)
  });
