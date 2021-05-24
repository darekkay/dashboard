import { takeEvery } from "typed-redux-saga";

import api, { Twitter } from "api/index";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import { widgetType } from "./properties";

const fetchTwitterStats = async (
  params: Twitter.GetTwitterStats.RequestQuery
) => {
  const response = await api.twitter.getTwitterStats(params);
  return response.data;
};

export function* saga() {
  yield* takeEvery(
    triggerUpdate(widgetType).type,
    triggerUpdateHandler(fetchTwitterStats)
  );
}
