import { combineReducers } from "redux";

import { reducerWithInitialState as heartbeatReducer } from "common/ducks/heartbeat";
import { reducerWithInitialState as settingsReducer } from "common/ducks/settings";
import { reducerWithInitialState as widgetReducer } from "components/widget/duck";

export const rootReducer = combineReducers({
  heartbeat: heartbeatReducer(),
  config: settingsReducer(),
  widgets: widgetReducer()
});
