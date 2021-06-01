import { takeEvery } from "typed-redux-saga";

import api, { Unsplash } from "api/index";
import triggerUpdateHandler from "common/utils/triggerUpdateHandler";
import { triggerUpdate } from "components/widget/duck";

import properties from "./properties";

const fetchUnsplashRandomPhoto = async (
  params: Unsplash.GetRandomImage.RequestQuery
) => {
  const response = await api.unsplash.getRandomImage(params);
  return response.data;
};

export function* saga() {
  yield* takeEvery(
    triggerUpdate(properties.widgetType).type,
    triggerUpdateHandler(fetchUnsplashRandomPhoto)
  );
}
