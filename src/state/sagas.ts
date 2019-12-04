import { all } from "redux-saga/effects";

import { saga as layoutSaga } from "common/ducks/layout";

export const rootSaga = function* rootSaga() {
  yield all([layoutSaga()]);
};
