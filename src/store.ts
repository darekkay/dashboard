import { configureStore } from "redux-starter-kit";

import {
  ConfigState,
  reducerWithInitialState as settingsReducer
} from "common/ducks/settings";
import {
  WidgetsState,
  reducerWithInitialState as widgetReducer
} from "components/widget/duck";

export interface State {
  config: ConfigState;
  widgets: WidgetsState;
  [key: string]: any;
}

const initStore = () =>
  configureStore({
    reducer: {
      config: settingsReducer(),
      widgets: widgetReducer()
    },
    preloadedState: {} // TODO: load from session storage
  });

export default initStore;
