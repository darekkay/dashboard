import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

export default {
  widgetType: "github-stats",
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
    headlineIcon: "github",
  },
} as WidgetProperties<WidgetOptions>;
