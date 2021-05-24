import { takeEvery } from "typed-redux-saga";

import api, { Youtube } from "api/index";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import { widgetType } from "./properties";

const fetchYoutubeStats = async (
  params: Youtube.GetYoutubeStats.RequestQuery
) => {
  const response = await api.youtube.getYoutubeStats(params);
  return response.data;
};

export function* saga() {
  yield* takeEvery(
    triggerUpdate(widgetType).type,
    triggerUpdateHandler(fetchYoutubeStats)
  );
}
