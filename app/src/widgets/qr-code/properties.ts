import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

export default {
  widgetType: "qr-code",
  category: "tools",
  configurable: true,
  initialHeight: 2,
  initialWidth: 2,
  initialOptions: {
    headline: "",
    content: "",
  },
  initialMeta: {},
} as WidgetProperties<WidgetOptions>;
