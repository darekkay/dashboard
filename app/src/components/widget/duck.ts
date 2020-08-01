/** Widget duck */

import { createAction, createReducer } from "@reduxjs/toolkit";
import { MomentInputObject } from "moment";

import widgets from "widgets";
import { Dimensions } from "components/widget/index";
import { IconName } from "components/icon";
import { importState } from "common/ducks/state";

interface SetValuesPayload {
  id: string;
  values: Record<string, any>;
}

export interface TriggerUpdateAction {
  id: string;
  params: Record<string, any>;
}

export interface UpdateActionError {
  id: string;
  error: any;
}

// Data actions
export const setOptions = createAction<SetValuesPayload>("widget/set-options");
export const setData = createAction<SetValuesPayload>("widget/set-data-value");
export const importWidgets = createAction<WidgetsState>("widget/importWidgets");

// Update actions
export const triggerUpdate = (widgetType: string) =>
  createAction<TriggerUpdateAction>(`widget/${widgetType}/update`);
export const updatePending = createAction<string>("widget/update-pending");
export const updateSuccess = createAction<string>("widget/update-success");
export const updateError = createAction<UpdateActionError>(
  "widget/update-error"
);
export const updateAbort = createAction<string>("widget/update-abort"); // NICE: check if really necessary

// Widget actions
export const createWidget = createAction<{ id: string; type: string }>(
  "widget/create"
);
export const removeWidget = createAction<string>("widget/remove");

export type UpdateStatus = "pending" | "success" | "error"; // TODO: add "idle" state as default instead of using undefined

export interface WidgetMeta {
  updateStatus?: UpdateStatus; // TODO: Remove optional flag after introducing "idle" state
  lastUpdated?: number;
  updateCycle?: MomentInputObject;
  errorCode?: number;
  dimensions?: Dimensions;
  headlineIcon?: IconName;
}

export interface Widget {
  type: string;
  options: Record<string, any>;
  data: Record<string, any>;
  meta: WidgetMeta;
}

export interface WidgetsState {
  [key: string]: Widget;
}

export const initialState = {};

export const reducerWithInitialState = (
  defaultState: WidgetsState = initialState
) =>
  createReducer<WidgetsState>(defaultState, (builder) =>
    builder
      .addCase(importState, (_state, action) => action.payload.widgets)

      .addCase(setOptions, (state, action) => {
        const { id, values } = action.payload;
        state[id].options = { ...state[id].options, ...values };
      })

      .addCase(setData, (state, action) => {
        const { id, values } = action.payload;
        state[id].data = { ...state[id].data, ...values };
      })

      .addCase(importWidgets, (_state, action) => action.payload)

      // NICE: for each updateStatus action, check for the correct preciding updateStatus
      // https://mobile.twitter.com/devongovett/status/1256368203594264576

      .addCase(updatePending, (state, action) => {
        const id = action.payload;
        state[id].meta.updateStatus = "pending";
      })

      .addCase(updateSuccess, (state, action) => {
        const id = action.payload;
        state[id].meta = {
          ...state[id].meta,
          updateStatus: "success",
          errorCode: undefined,
          lastUpdated: Date.now(),
        };
      })

      .addCase(updateError, (state, action) => {
        const { id, error } = action.payload;
        state[id].meta.updateStatus = "error";
        state[id].meta.errorCode = error?.response?.status; // use axios response error code
      })

      .addCase(updateAbort, (state, action) => {
        const id = action.payload;
        state[id].meta.updateStatus = undefined;
      })

      .addCase(createWidget, (state, action) => {
        const { id, type } = action.payload;
        state[id] = {
          type,
          data: {},
          options: widgets[type].initialOptions || {},
          meta: widgets[type].initialMeta || {},
        };
      })

      .addCase(removeWidget, (state, action) => {
        const id = action.payload;
        delete state[id];
      })
  );

export const actionCreators = {
  setOptions,
  setData,
  triggerUpdate,
};
