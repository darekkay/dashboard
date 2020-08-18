import _ from "lodash";

import { State } from "state/store";
import { WidgetMeta } from "components/widget/duck";

/* Default widget props (e.g. for unit tests) */
export const widgetProps = {
  meta: { updateCycle: { hours: 1 }, updateStatus: "idle" } as WidgetMeta,
  setData: _.noop,
  setOptions: _.noop,
  triggerUpdate: _.noop,
};

/* Default connected widget props (e.g. for stories) */
export const connectedWidgetProps = {
  options: {},
  data: {},
  removeWidgetFromLayout: _.noop,
  hasError: false,
  ...widgetProps,
};

/* Default empty state */
export const stateProps: State = {
  config: { theme: "", language: "" },
  widgets: {},
  layout: {
    isEditable: false,
    config: { mobile: [], desktop: [] },
    nextWidgetId: 1,
  },
};
