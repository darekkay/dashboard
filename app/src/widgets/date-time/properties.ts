import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

export default {
  widgetType: "date-time",
  category: "general",
  configurable: true,
  initialHeight: 2,
  initialWidth: 3,
  initialOptions: {
    headline: "",
    timezone: "auto",
  },
  initialMeta: {},
} as WidgetProperties<WidgetOptions>;
