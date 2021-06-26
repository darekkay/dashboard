import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
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
};

export default properties;
