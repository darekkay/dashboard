import { takeEvery } from "typed-redux-saga";

import api, { TWITTER_STATS } from "common/api";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import { widgetType } from "./properties";

const fetchTwitterStats = async (params: Record<string, any>) => {
  const response = await api.get(TWITTER_STATS, { params });
  return response.data;
};

export function* saga() {
  yield* takeEvery(
    triggerUpdate(widgetType).type,
    triggerUpdateHandler(fetchTwitterStats)
  );
}
