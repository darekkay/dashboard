import { takeEvery } from "@redux-saga/core/effects";

import api, { GITHUB_STATS } from "common/api";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import { widgetType } from "./properties";

const fetchGitHubStats = async (params: Record<string, any>) => {
  const response = await api.get(GITHUB_STATS, { params });
  return response.data;
};

export function* saga() {
  yield takeEvery(
    triggerUpdate(widgetType).type,
    triggerUpdateHandler(fetchGitHubStats)
  );
}
