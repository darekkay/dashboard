import { put, call } from "typed-redux-saga";
import type { PayloadAction } from "@reduxjs/toolkit";

import {
  actions as widgetActions,
  type TriggerUpdateAction,
} from "components/widget/duck";

type ApiCall = (params: any) => Record<string, any>;

const triggerUpdateHandler = (apiCall: ApiCall) => {
  return function* onTriggerUpdate(action: PayloadAction<TriggerUpdateAction>) {
    const { id, params } = action.payload;
    yield* put(widgetActions.updatePending(id));
    try {
      const data = yield* call(apiCall, params);
      yield* put(
        widgetActions.setData({
          id,
          values: data,
        })
      );
      yield* put(widgetActions.updateSuccess(id));
    } catch (error: any) {
      yield* put(
        widgetActions.updateError({
          id,
          message: error?.message,
          statusCode: error?.response?.status, // use axios response error code
        })
      );
    }
  };
};

export default triggerUpdateHandler;
