import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
  widgetType: "youtube-stats",
  category: "monitoring",
  configurable: true,
  hasSaga: true,
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
};

export default properties;
