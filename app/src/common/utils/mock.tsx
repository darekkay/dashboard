import React from "react";

import { State } from "state/store";
import { Props as WidgetComponentProps } from "components/widget";

interface MockWidgetProps extends Omit<WidgetComponentProps, "id"> {
  id: string;
  headline: string;
}

/* Default widget props (e.g. for stories and unit tests) */
export const widgetProps: MockWidgetProps = {
  meta: { updateCycle: { hours: 1 }, updateStatus: "success" },
  options: {},
  data: {},
  setData: () => {},
  setOptions: () => {},
  triggerUpdate: () => {},
  removeWidgetFromLayout: () => {},

  // common widget props
  id: "widget-mock-id",
  type: "text",
  headline: "",
};

export const widgetContentProps = {
  ...widgetProps,
  widgetStatusDisplay: null,
};

export const widgetStatusDisplay = <div data-testid="widget-status-display" />;

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
