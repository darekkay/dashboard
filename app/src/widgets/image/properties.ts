import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

export default {
  widgetType: "image",
  category: "media",
  configurable: true,
  initialHeight: 4,
  initialWidth: 4,
  initialOptions: {
    url: "",
  },
  initialMeta: {},
} as WidgetProperties<WidgetOptions>;
