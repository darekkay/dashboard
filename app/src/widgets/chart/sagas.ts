import { takeEvery } from "typed-redux-saga";

import { passthrough, PassthroughParams } from "api/index";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import properties from "./properties";

const fetchData = async (params: PassthroughParams) => {
  const response = await passthrough(params);
  return response.data;
};

export function* saga() {
  yield* takeEvery(
    triggerUpdate(properties.widgetType).type,
    triggerUpdateHandler(fetchData)
  );
}
