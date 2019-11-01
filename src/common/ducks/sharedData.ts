/** Shared data */

import { createAction, createReducer } from "redux-starter-kit";

interface DataState {
  [key: string]: any;
}

export const setSharedDataValue = createAction<{
  widgetType: string;
  value: { [key: string]: any };
}>("sharedData/set-value");

export const initialState = {
  "date-time": {
    date: Date.now()
  }
};

export const reducerWithInitialState = (state: DataState = initialState) =>
  createReducer(state, {
    [setSharedDataValue as any]: (state, action) => ({
      ...state,
      [action.payload.widgetType]: action.payload.value
    })
  });

export const actionCreators = {
  setSharedDataValue
};
