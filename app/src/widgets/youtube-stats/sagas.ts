import { takeEvery } from "@redux-saga/core/effects";

import api, { YOUTUBE_STATS } from "common/api";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import { widgetType } from "./properties";

const fetchYoutubeStats = async (params: Record<string, any>) => {
  const response = await api.get(YOUTUBE_STATS, { params });
  return response.data;
};

export function* saga() {
  yield takeEvery(
    triggerUpdate(widgetType).type,
    triggerUpdateHandler(fetchYoutubeStats)
  );
}
