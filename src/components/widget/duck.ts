/** Widget duck */

import { createAction, createReducer } from "redux-starter-kit";

import widgets from "widgets";
import { initialWidgets } from "widgets/demo";

interface SetValuesPayload {
  id: string;
  values: { [key: string]: any };
}

const setOptions = createAction<SetValuesPayload>("widget/set-options");
const setData = createAction<SetValuesPayload>("widget/set-data-value");
export const createWidget = createAction<{ id: string; type: string }>(
  "widget/create"
);
export const removeWidget = createAction<string>("widget/remove");

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
    [setOptions.toString()]: (state, action) => {
      const { id, values } = action.payload;
      state[id].options = { ...state[id].options, ...values };
    },

    [setData.toString()]: (state, action) => {
      const { id, values } = action.payload;
      state[id].data = { ...state[id].data, ...values };
    },

    [createWidget.toString()]: (state, action) => {
      const { id, type } = action.payload;
      state[id] = {
        type,
        data: {},
        options: widgets[type].initialOptions
      };
    },

    [removeWidget.toString()]: (state, action) => {
      const id = action.payload;
      delete state[id];
    }
  });

export const actionCreators = {
  setOptions,
  setData
};
