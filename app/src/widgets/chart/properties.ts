import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
  widgetType: "chart",
  category: "tracking",
  configurable: true,
  initialHeight: 3,
  initialWidth: 7,
  initialOptions: {
    headline: "",
    url: "",
    dataPath: "",
    dataKeyX: "",
    dataKeyY: "",
  },
  initialMeta: {
    // NICE: make update cycle configurable
    updateCycle: { hours: 24 },
    updateStatus: "idle",
  },
};

export default properties;
