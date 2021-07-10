import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
  widgetType: "image",
  category: "media",
  configurable: true,
  hasSaga: false,
  initialHeight: 4,
  initialWidth: 4,
  initialOptions: {
    url: "",
  },
  initialMeta: {},
};

export default properties;
