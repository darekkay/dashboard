import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
  widgetType: "twitter-stats",
  category: "monitoring",
  configurable: true,
  hasSaga: true,
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
};

export default properties;
