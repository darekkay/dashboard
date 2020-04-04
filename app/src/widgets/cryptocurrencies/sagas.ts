import { put, call, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import log from "common/log";
import api, { CRYPTOCURRENCIES_PRICE } from "common/api";
import {
  setData,
  triggerUpdate,
  updatePending,
  updateError,
  updateSuccess,
  TriggerUpdateAction
} from "components/widget/duck";

import { widgetType } from "./properties";

const fetchCryptocurrencyPrice = async (params: { [key: string]: any }) => {
  const response = await api.get(CRYPTOCURRENCIES_PRICE, { params });
  return response.data;
};

function* onTriggerUpdate(action: PayloadAction<TriggerUpdateAction>) {
  const { id, params } = action.payload;
  yield put(updatePending(id));
  try {
    const data = yield call(fetchCryptocurrencyPrice, params);
    yield put(
      setData({
        id,
        values: data
      })
    );
    yield put(updateSuccess(id));
  } catch (error) {
    log.error(error);
    yield put(updateError(id));
  }
}

export function* saga() {
  yield takeEvery(triggerUpdate(widgetType).toString(), onTriggerUpdate);
}
