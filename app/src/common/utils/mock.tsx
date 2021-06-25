import { State } from "state/store";
import { WidgetProps } from "widgets";

interface MockWidgetProps extends Omit<WidgetProps, "id"> {
  id: string;
  headline: string;
}

/* Default widget props (e.g. for unit tests) */
export const widgetProps: MockWidgetProps = {
  meta: { updateCycle: { hours: 1 }, updateStatus: "idle" },
  setData: () => {},
  setOptions: () => {},
  triggerUpdate: () => {},

  // common widget props
  id: "widget-mock-id",
  headline: "",
};

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
