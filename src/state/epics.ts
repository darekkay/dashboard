import { combineEpics } from "redux-observable";

import { epic as heartbeatEpic } from "common/ducks/heartbeat";
import { epic as layoutEpic } from "common/ducks/layout";

export const rootEpic = combineEpics(heartbeatEpic, layoutEpic);
