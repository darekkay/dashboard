import { combineReducers } from "redux";

import { reducer as configReducer } from "common/ducks/config";
import { reducer as layoutReducer } from "common/ducks/layout";
import { reducer as widgetReducer } from "components/widget/duck";

export const rootReducer = combineReducers({
  config: configReducer,
  widgets: widgetReducer,
  layout: layoutReducer,
});
