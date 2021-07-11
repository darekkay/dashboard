/** Widget duck */

import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

export const triggerUpdate = (widgetType: WidgetType) =>
  createAction<TriggerUpdateAction>(`widget/${widgetType}/update`);

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

export const initialState: WidgetsState = {};

const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    setOptions(state, action: PayloadAction<SetValuesPayload>) {
      const { id, values } = action.payload;
      state[id].options = { ...state[id].options, ...values };
    },
    setData(state, action: PayloadAction<SetValuesPayload>) {
      const { id, values } = action.payload;
      state[id].data = { ...state[id].data, ...values };
    },
    updatePending(state, action: PayloadAction<string>) {
      const id = action.payload;
      state[id].meta.updateStatus = "pending";
    },
    updateSuccess(state, action: PayloadAction<string>) {
      const id = action.payload;
      state[id].meta = {
        ...state[id].meta,
        updateStatus: "success",
        errorCode: undefined,
        lastUpdated: Date.now(),
      };
    },
    updateError(state, action: PayloadAction<UpdateActionError>) {
      const { id, error } = action.payload;
      state[id].meta.updateStatus = "error";
      state[id].meta.errorCode = error?.response?.status; // use axios response error code
    },
    createWidget(
      state,
      action: PayloadAction<{ id: string; type: WidgetType }>
    ) {
      const { id, type } = action.payload;
      state[id] = {
        type,
        data: {},
        options: widgets[type].initialOptions,
        meta: widgets[type].initialMeta,
      };
    },
    removeWidget(state, action: PayloadAction<string>) {
      const id = action.payload;
      delete state[id];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(importState, (state, action) => {
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
    });
  },
});

export const { reducer, actions } = widgetSlice;
