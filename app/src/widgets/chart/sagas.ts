import { takeEvery } from "@redux-saga/core/effects";

import api, { PASSTHROUGH } from "common/api";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import { widgetType } from "./properties";

const fetchData = async (params: Record<string, any>) => {
  const response = await api.get(PASSTHROUGH, { params });
  return response.data;
};

export function* saga() {
  yield takeEvery(
    triggerUpdate(widgetType).type,
    triggerUpdateHandler(fetchData)
  );
}
