import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
  widgetType: "qr-code",
  category: "tools",
  configurable: true,
  hasSaga: false,
  initialHeight: 2,
  initialWidth: 2,
  initialOptions: {
    headline: "",
    content: "",
  },
  initialMeta: {},
};

export default properties;
