import { WidgetProperties } from "widgets/index";

import { WidgetOptions } from "./configuration";

const properties: WidgetProperties<WidgetOptions> = {
  widgetType: "website",
  category: "media",
  configurable: true,
  initialHeight: 5,
  initialWidth: 5,
  initialOptions: {
    url: "",
  },
  initialMeta: {},
};

export default properties;
