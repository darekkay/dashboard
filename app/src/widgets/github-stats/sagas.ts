import { takeEvery } from "typed-redux-saga";

import api, { Github } from "api/index";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import { widgetType } from "./properties";

const fetchGitHubStats = async (params: Github.GetGitHubStats.RequestQuery) => {
  const response = await api.github.getGitHubStats(params);
  return response.data;
};

export function* saga() {
  yield* takeEvery(
    triggerUpdate(widgetType).type,
    triggerUpdateHandler(fetchGitHubStats)
  );
}
