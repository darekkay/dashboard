import { WidgetProperties } from "widgets/index";

const properties: WidgetProperties = {
  widgetType: "random-image",
  category: "media",
  configurable: false,
  hasSaga: true,
  initialHeight: 4,
  initialWidth: 6,
  initialOptions: {},
  initialMeta: {
    updateCycle: { hours: 24 },
    updateStatus: "idle",
  },
};

export default properties;
