import { put, call, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import pick from "lodash/pick";

import {
  setData,
  triggerUpdate,
  updatePending,
  updateError,
  updateSuccess,
  TriggerUpdateAction,
} from "components/widget/duck";

import { widgetType } from "./properties";

const URL = "https://tips.darekkay.com/json/chemical-elements-en.json";

const fetchTipOfTheDay = async () => {
  return axios(URL).then((response) => response.data);
};

function* onTriggerUpdate(action: PayloadAction<TriggerUpdateAction>) {
  const { id } = action.payload;
  yield put(updatePending(id));
  try {
    const responseData = yield call(fetchTipOfTheDay);
    yield put(
      setData({
        id,
        values: {
          ...pick(responseData, "name", "nameDE", "symbol", "atomicNumber"),
        },
      })
    );
    yield put(updateSuccess(id));
  } catch (error) {
    yield put(updateError({ id, error }));
  }
}

export function* saga() {
  yield takeLatest(triggerUpdate(widgetType).type, onTriggerUpdate);
}
