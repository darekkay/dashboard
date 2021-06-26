import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
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
};

export default properties;
