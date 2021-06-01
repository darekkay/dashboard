import { State } from "state/store";
import { WidgetProps } from "widgets";

interface MockWidgetProps extends Omit<WidgetProps, "id"> {
  headline: string;
}

/* Default widget props (e.g. for unit tests) */
export const widgetProps: MockWidgetProps = {
  meta: { updateCycle: { hours: 1 }, updateStatus: "idle" },
  setData: () => {},
  setOptions: () => {},
  triggerUpdate: () => {},

  // common widget props
  headline: "",
};

/* Default connected widget props (e.g. for stories) */
export const connectedWidgetProps = {
  options: {},
  data: {},
  removeWidgetFromLayout: () => {},
  hasError: false,
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
