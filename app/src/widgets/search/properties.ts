import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";
import providers from "./lib/providers";

const properties: WidgetProperties<WidgetOptions> = {
  widgetType: "search",
  category: "tools",
  configurable: true,
  hasSaga: false,
  initialHeight: 2,
  initialWidth: 4,
  initialOptions: providers[0],
  initialMeta: {},
};

export default properties;
