/**
 * For now, this file is used as a utility to optimize re-renderings.
 * In the future, something similar may be used for clocks, countdowns etc.
 */

import { createAction, createReducer } from "redux-starter-kit";
import { ofType, Epic } from "redux-observable";
import { ignoreElements } from "rxjs/operators";

export const sendHeartbeat = createAction("heartbeat/send");

export const initialState = Date.now();

export const reducerWithInitialState = (state: number = initialState) =>
  createReducer(state, {
    [sendHeartbeat as any]: (state, action) => action.payload
  });

// dummy epic
export const epic: Epic = action$ =>
  action$.pipe(
    ofType(sendHeartbeat),
    ignoreElements()
  );

export const actionCreators = {
  sendHeartbeat
};
