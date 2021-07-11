/** Widget duck */

import { createAction, createReducer } from "@reduxjs/toolkit";
import mapValues from "lodash/mapValues";

import widgets from "widgets";
import { Dimensions } from "components/widget/index";
import { IconName } from "components/icon";
import { Duration } from "common/date";
import { importState } from "common/ducks/state";
import { WidgetType } from "widgets/list";

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

// Update actions
export const triggerUpdate = (widgetType: WidgetType) =>
  createAction<TriggerUpdateAction>(`widget/${widgetType}/update`);
export const updatePending = createAction<string>("widget/update-pending");
export const updateSuccess = createAction<string>("widget/update-success");
export const updateError = createAction<UpdateActionError>(
  "widget/update-error"
);

// Widget actions
export const createWidget =
  createAction<{ id: string; type: WidgetType }>("widget/create");
export const removeWidget = createAction<string>("widget/remove");

export type UpdateStatus = "idle" | "pending" | "success" | "error";

export interface WidgetMeta {
  updateStatus?: UpdateStatus;
  lastUpdated?: number;
  updateCycle?: Duration;
  errorCode?: number;
  dimensions?: Dimensions;
  headlineIcon?: IconName;
}

export interface Widget {
  type: WidgetType;
  options: Record<string, any>;
  data: Record<string, any>;
  meta: WidgetMeta;
}

export type WidgetsState = Record<string, Widget>;

export const initialState = {};

export const reducerWithInitialState = createReducer<WidgetsState>(
  initialState,
  (builder) =>
    builder
      .addCase(importState, (_state, action) => {
        return mapValues(action.payload.widgets, (widgetState) => {
          /** Reset data for widgets that update themselves */
          const forceUpdate = widgetState.meta.updateCycle
            ? {
                data: {},
                meta: {
                  ...widgetState.meta,
                  updateCycle: widgetState.meta.updateCycle,
                  updateStatus: "idle" as const,
                  lastUpdated: undefined,
                },
              }
            : {};
          return {
            ...widgetState,
            ...forceUpdate,
          };
        });
      })

      .addCase(setOptions, (state, action) => {
        const { id, values } = action.payload;
        state[id].options = { ...state[id].options, ...values };
      })

      .addCase(setData, (state, action) => {
        const { id, values } = action.payload;
        state[id].data = { ...state[id].data, ...values };
      })

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

      .addCase(createWidget, (state, action) => {
        const { id, type } = action.payload;
        state[id] = {
          type,
          data: {},
          options: widgets[type].initialOptions,
          meta: widgets[type].initialMeta,
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
