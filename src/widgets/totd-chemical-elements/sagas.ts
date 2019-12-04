import { put, call, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "redux-starter-kit";
import axios from "axios";
import _ from "lodash";

import {
  setData,
  triggerUpdate,
  updateError,
  updateSuccess
} from "components/widget/duck";

const URL = "https://tips.darekkay.com/json/chemical-elements-en.json";

const fetchTipOfTheDay = () => {
  return axios(URL).then(response => response.data);
};

function* moo(action: PayloadAction<string>) {
  const id = action.payload;
  try {
    const data = yield call(fetchTipOfTheDay);
    yield put(
      setData({
        id,
        values: {
          ..._.pick(data, "name", "symbol", "atomicNumber")
        }
      })
    );
    yield put(updateSuccess(id));
  } catch (error) {
    console.error(error);
    yield put(updateError(id));
  }
}

export function* saga() {
  yield takeLatest(triggerUpdate.toString(), moo);
}
