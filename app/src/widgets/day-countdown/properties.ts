import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
  widgetType: "day-countdown",
  category: "tracking",
  configurable: true,
  initialHeight: 2,
  initialWidth: 3,
  initialOptions: {
    eventName: "",
  },
  initialMeta: {},
};

export default properties;
