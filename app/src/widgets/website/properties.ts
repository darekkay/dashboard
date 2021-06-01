import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

export default {
  widgetType: "website",
  category: "media",
  configurable: true,
  initialHeight: 5,
  initialWidth: 5,
  initialOptions: {
    url: "",
  },
  initialMeta: {},
} as WidgetProperties<WidgetOptions>;
