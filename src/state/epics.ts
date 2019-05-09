import { combineEpics } from "redux-observable";

import { epic as heartbeatEpic } from "common/ducks/heartbeat";

export const rootEpic = combineEpics(heartbeatEpic);
