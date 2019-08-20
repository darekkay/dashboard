/** Widget duck */

import { createAction, createReducer } from "redux-starter-kit";

import { initialWidgets } from "widgets/demo";

const setOptionValue = createAction("widget/set-option-value");
const setDataValue = createAction("widget/set-data-value");
export const createWidget = createAction("widget/create");

export interface Widget {
  type: string;
  options: {
    [key: string]: any;
  };
  data: {
    [key: string]: any;
  };
}

export interface WidgetsState {
  [key: string]: Widget;
}

export const initialState = initialWidgets;

export const reducerWithInitialState = (state: WidgetsState = initialState) =>
  createReducer(state, {
    [setOptionValue as any]: (state, action) => {
      const { id, key, value } = action.payload;
      state[id].options[key] = value;
    },

    [setDataValue as any]: (state, action) => {
      const { id, key, value } = action.payload;
      state[id].data[key] = value;
    },

    [createWidget as any]: (state, action) => {
      const { id, type } = action.payload;
      state[id] = {
        type,
        data: {},
        options: {}
      };
    }
  });

export const actionCreators = {
  setOptionValue,
  setDataValue
};
