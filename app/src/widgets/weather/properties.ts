import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
  widgetType: "weather",
  category: "general",
  configurable: true,
  initialHeight: 2,
  initialWidth: 4,
  initialOptions: {
    lat: "",
    lon: "",
    unit: "metric",
  },
  initialMeta: {
    updateCycle: { hours: 4 },
    updateStatus: "idle",
  },
};

export default properties;
