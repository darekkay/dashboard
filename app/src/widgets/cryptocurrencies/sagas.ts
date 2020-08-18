import { takeEvery } from "@redux-saga/core/effects";

import api, { CRYPTOCURRENCIES_PRICE } from "common/api";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import { widgetType } from "./properties";

const fetchCryptocurrencyPrice = async (params: Record<string, any>) => {
  const response = await api.get(CRYPTOCURRENCIES_PRICE, { params });
  return response.data;
};

export function* saga() {
  yield takeEvery(
    triggerUpdate(widgetType).type,
    triggerUpdateHandler(fetchCryptocurrencyPrice)
  );
}
