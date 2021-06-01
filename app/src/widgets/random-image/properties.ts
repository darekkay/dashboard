import { WidgetProperties } from "widgets/index";

export default {
  widgetType: "random-image",
  category: "media",
  configurable: false,
  initialHeight: 4,
  initialWidth: 6,
  initialOptions: {},
  initialMeta: {
    updateCycle: { hours: 24 },
    updateStatus: "idle",
  },
} as WidgetProperties;
