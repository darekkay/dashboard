import { all } from "typed-redux-saga";

import { saga as i18nSaga } from "common/i18n";
import { saga as layoutSaga } from "common/ducks/layout";
import { saga as configSaga } from "common/ducks/config";

export const rootSaga = function* rootSaga() {
  yield* all([i18nSaga(), layoutSaga(), configSaga()]);
};
