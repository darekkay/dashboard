import { takeEvery } from "typed-redux-saga";
import axios from "axios";
import pick from "lodash/pick";

import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import properties from "./properties";

const URL = "https://tips.darekkay.com/json/chemical-elements-en.json";

const fetchTipOfTheDay = async () => {
  const response = await axios.get(URL);
  return pick(response.data, "name", "nameDE", "symbol", "atomicNumber");
};

export function* saga() {
  yield* takeEvery(
    triggerUpdate(properties.widgetType).type,
    triggerUpdateHandler(fetchTipOfTheDay)
  );
}
