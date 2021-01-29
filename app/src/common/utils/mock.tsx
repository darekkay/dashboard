import { State } from "state/store";
import { WidgetMeta } from "components/widget/duck";

/* Default widget props (e.g. for unit tests) */
export const widgetProps = {
  meta: { updateCycle: { hours: 1 }, updateStatus: "idle" } as WidgetMeta,
  setData: () => {},
  setOptions: () => {},
  triggerUpdate: () => {},
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
