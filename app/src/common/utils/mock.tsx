import React from "react";

import { State } from "state/store";
import { WidgetProps } from "widgets";

interface MockWidgetProps extends Omit<WidgetProps, "id"> {
  id: string;
  headline: string;
}

/* Default widget props (e.g. for unit tests) */
export const widgetProps: MockWidgetProps = {
  meta: { updateCycle: { hours: 1 }, updateStatus: "success" },
  setData: () => {},
  setOptions: () => {},
  triggerUpdate: () => {},
  widgetStatusDisplay: null,

  // common widget props
  id: "widget-mock-id",
  type: "text",
  headline: "",
};

export const widgetStatusDisplay = <div data-testid="widget-status-display" />;

/* Default connected widget props (e.g. for stories) */
export const connectedWidgetProps = {
  options: {},
  data: {},
  removeWidgetFromLayout: () => {},
  hasRenderError: false,
  ...widgetProps,
};

/* Default empty state */
export const stateProps: State = {
  config: { theme: "", language: "", backgroundUrl: "" },
  widgets: {},
  layout: {
    isEditable: false,
    config: { mobile: [], desktop: [] },
    nextWidgetId: 1,
  },
};
