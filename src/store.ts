import { configureStore } from "redux-starter-kit";

import { reducerWithInitialState as heartbeatReducer } from "common/ducks/heartbeat";
import {
  ConfigState,
  reducerWithInitialState as settingsReducer
} from "common/ducks/settings";
import {
  WidgetsState,
  reducerWithInitialState as widgetReducer
} from "components/widget/duck";

export interface State {
  heartbeat: number;
  config: ConfigState;
  widgets: WidgetsState;

  [key: string]: any;
}

const initStore = () =>
  configureStore({
    reducer: {
      heartbeat: heartbeatReducer(),
      config: settingsReducer(),
      widgets: widgetReducer()
    },
    preloadedState: {} // TODO: load from session storage
  });

export default initStore;
