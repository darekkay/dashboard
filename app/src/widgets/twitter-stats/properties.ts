import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

export default {
  widgetType: "twitter-stats",
  category: "monitoring",
  configurable: true,
  initialHeight: 3,
  initialWidth: 3,
  initialOptions: {
    username: "",
  },
  initialMeta: {
    updateCycle: { hours: 24 },
    updateStatus: "idle",
    headlineIcon: "twitter",
  },
} as WidgetProperties<WidgetOptions>;
