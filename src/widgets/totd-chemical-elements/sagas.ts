import { put, call, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";

import {
  setData,
  triggerUpdate,
  updatePending,
  updateError,
  updateSuccess
} from "components/widget/duck";
import log from "common/log";

import { widgetType } from "./properties";

const URL = "https://tips.darekkay.com/json/chemical-elements-en.json";

const fetchTipOfTheDay = () => {
  return axios(URL).then(response => response.data);
};

function* onTriggerUpdate(action: PayloadAction<string>) {
  const id = action.payload;
  yield put(updatePending(id));
  try {
    const data = yield call(fetchTipOfTheDay);
    yield put(
      setData({
        id,
        values: {
          ..._.pick(data, "name", "nameDE", "symbol", "atomicNumber")
        }
      })
    );
    yield put(updateSuccess(id));
  } catch (error) {
    log.error(error);
    yield put(updateError(id));
  }
}

export function* saga() {
  yield takeLatest(triggerUpdate(widgetType).toString(), onTriggerUpdate);
}
