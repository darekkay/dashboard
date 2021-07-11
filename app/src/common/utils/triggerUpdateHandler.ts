import { put, call } from "typed-redux-saga";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  actions as widgetActions,
  TriggerUpdateAction,
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
    } catch (error) {
      yield* put(widgetActions.updateError({ id, error }));
    }
  };
};

export default triggerUpdateHandler;
