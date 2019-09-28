/** Widget duck */

import { createAction, createReducer } from "redux-starter-kit";

import { initialWidgets } from "widgets/demo";
import { ValueUpdateAction } from "widgets";

const setOptions = createAction("widget/set-options");
const setData = createAction("widget/set-data-value");
export const createWidget = createAction("widget/create");
export const removeWidget = createAction("widget/remove");

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
    [setOptions as any]: (state, action) => {
      const { id, values } = action.payload;
      state[id].options = { ...state[id].options, ...values };
    },

    [setData as any]: (state, action) => {
      const { id, values} = action.payload;
      state[id].data = { ...state[id].data, ...values };
    },

    [createWidget as any]: (state, action) => {
      const { id, type } = action.payload;
      state[id] = {
        type,
        data: {},
        options: {}
      };
    },

    [removeWidget as any]: (state, action) => {
      const id = action.payload;
      delete state[id];
    }
  });

export const actionCreators = {
  setOptions,
  setData
};
