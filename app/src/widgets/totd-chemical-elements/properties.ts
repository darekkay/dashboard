import { WidgetProperties } from "widgets/index";

export default {
  widgetType: "totd-chemical-elements",
  category: "knowledge",
  configurable: false,
  initialHeight: 2,
  initialWidth: 2,
  initialOptions: {},
  initialMeta: {
    updateCycle: { hours: 24 },
    updateStatus: "idle",
  },
} as WidgetProperties;
