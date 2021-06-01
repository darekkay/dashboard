import { takeEvery } from "typed-redux-saga";

import api, { Cryptocurrencies } from "api/index";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import properties from "./properties";

const fetchCryptocurrencyPrice = async (
  params: Cryptocurrencies.GetCryptocurrencyPrice.RequestQuery
) => {
  const response = await api.cryptocurrencies.getCryptocurrencyPrice(params);
  return response.data;
};

export function* saga() {
  yield* takeEvery(
    triggerUpdate(properties.widgetType).type,
    triggerUpdateHandler(fetchCryptocurrencyPrice)
  );
}
