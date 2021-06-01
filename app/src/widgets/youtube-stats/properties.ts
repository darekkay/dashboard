import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

export default {
  widgetType: "youtube-stats",
  category: "monitoring",
  configurable: true,
  initialHeight: 3,
  initialWidth: 3,
  initialOptions: {
    query: "",
  },
  initialMeta: {
    updateCycle: { hours: 24 },
    updateStatus: "idle",
    headlineIcon: "youtube",
  },
} as WidgetProperties<WidgetOptions>;
