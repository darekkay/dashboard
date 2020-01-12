import { all } from "redux-saga/effects";

import { saga as i18nSaga } from "common/i18n";
import { saga as layoutSaga } from "common/ducks/layout";

export const rootSaga = function* rootSaga() {
  yield all([i18nSaga(), layoutSaga()]);
};
