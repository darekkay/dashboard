import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
  widgetType: "counter",
  category: "tracking",
  configurable: true,
  initialHeight: 2,
  initialWidth: 2,
  initialOptions: {
    headline: "",
  },
  initialMeta: {},
};

export default properties;
