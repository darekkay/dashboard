import { takeEvery } from "typed-redux-saga";

import api, { UNSPLASH_RANDOM_PHOTO } from "common/api";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import { widgetType } from "./properties";

const fetchUnsplashRandomPhoto = async (params: Record<string, any>) => {
  const response = await api.get(UNSPLASH_RANDOM_PHOTO, { params });
  return response.data;
};

export function* saga() {
  yield* takeEvery(
    triggerUpdate(widgetType).type,
    triggerUpdateHandler(fetchUnsplashRandomPhoto)
  );
}
