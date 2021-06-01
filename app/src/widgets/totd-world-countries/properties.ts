import { WidgetProperties } from "widgets/index";

export default {
  widgetType: "totd-world-countries",
  category: "knowledge",
  configurable: false,
  initialHeight: 4,
  initialWidth: 4,
  initialOptions: {},
  initialMeta: {
    updateCycle: { hours: 24 },
    updateStatus: "idle",
  },
} as WidgetProperties;
