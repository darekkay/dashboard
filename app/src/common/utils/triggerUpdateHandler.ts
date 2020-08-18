import { put, call } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  setData,
  updatePending,
  updateError,
  updateSuccess,
  TriggerUpdateAction,
} from "components/widget/duck";

const triggerUpdateHandler = (apiCall: (...args: any[]) => any) => {
  return function* onTriggerUpdate(action: PayloadAction<TriggerUpdateAction>) {
    const { id, params } = action.payload;
    yield put(updatePending(id));
    try {
      const data = yield call(apiCall, params);
      yield put(
        setData({
          id,
          values: data,
        })
      );
      yield put(updateSuccess(id));
    } catch (error) {
      yield put(updateError({ id, error }));
    }
  };
};

export default triggerUpdateHandler;
