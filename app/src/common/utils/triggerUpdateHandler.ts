import { put, call } from "typed-redux-saga";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  setData,
  updatePending,
  updateError,
  updateSuccess,
  TriggerUpdateAction,
} from "components/widget/duck";

type ApiCall = (params: Record<string, any>) => Record<string, any>;

const triggerUpdateHandler = (apiCall: ApiCall) => {
  return function* onTriggerUpdate(action: PayloadAction<TriggerUpdateAction>) {
    const { id, params } = action.payload;
    yield* put(updatePending(id));
    try {
      const data = yield* call(apiCall, params);
      yield* put(
        setData({
          id,
          values: data,
        })
      );
      yield* put(updateSuccess(id));
    } catch (error) {
      yield* put(updateError({ id, error }));
    }
  };
};

export default triggerUpdateHandler;
