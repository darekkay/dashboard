import { combineReducers } from "redux";

import { reducerWithInitialState as configReducer } from "common/ducks/config";
import { reducerWithInitialState as layoutReducer } from "common/ducks/layout";
import { reducerWithInitialState as widgetReducer } from "components/widget/duck";

export const rootReducer = combineReducers({
  config: configReducer,
  widgets: widgetReducer,
  layout: layoutReducer,
});
