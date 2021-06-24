import { takeEvery } from "typed-redux-saga";

import api, { Weather } from "api/index";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import properties from "./properties";

const fetchData = async (params: Weather.GetWeatherData.RequestQuery) => {
  const response = await api.weather.getWeatherData(params);
  return response.data;
};

export function* saga() {
  yield* takeEvery(
    triggerUpdate(properties.widgetType).type,
    triggerUpdateHandler(fetchData)
  );
}
