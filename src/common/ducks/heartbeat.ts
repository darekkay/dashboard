/**
 * For now, this file is used as a utility to optimize re-renderings.
 * In the future, something similar may be used for clocks, countdowns etc.
 */

import { createAction, createReducer } from "redux-starter-kit";
import { ofType, Epic } from "redux-observable";
import { map, filter } from "rxjs/operators";
import moment from "moment";

import { setSharedDataValue } from "./sharedData";

export const sendHeartbeat = createAction("heartbeat/send");

export const initialState = Date.now();

export const reducerWithInitialState = (state: number = initialState) =>
  createReducer(state, {
    [sendHeartbeat as any]: (state, action) => action.payload
  });

export const getMinuteDate = (date: number) =>
  moment(date)
    .startOf("minute")
    .valueOf();

/* TODO: remove ignore flag when the test is implemented */
export const epic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(sendHeartbeat),
    filter(
      /* istanbul ignore next */
      action =>
        state$.value.sharedData["date-time"].date !==
        getMinuteDate(action.payload)
    ),
    map(
      /* istanbul ignore next */
      action =>
        setSharedDataValue({
          widgetType: "date-time",
          value: {
            date: getMinuteDate(action.payload)
          }
        })
    )
  );

export const actionCreators = {
  sendHeartbeat
};
