import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

export default {
  widgetType: "counter",
  category: "tracking",
  configurable: true,
  initialHeight: 2,
  initialWidth: 2,
  initialOptions: {
    headline: "",
  },
  initialMeta: {},
} as WidgetProperties<WidgetOptions>;
