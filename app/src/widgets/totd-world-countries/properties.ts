import { WidgetProperties } from "widgets/index";

const properties: WidgetProperties = {
  widgetType: "totd-world-countries",
  category: "knowledge",
  configurable: false,
  initialHeight: 3,
  initialWidth: 3,
  initialOptions: {},
  initialMeta: {
    updateCycle: { hours: 24 },
    updateStatus: "idle",
  },
};

export default properties;
