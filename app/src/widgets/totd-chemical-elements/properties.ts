import { WidgetProperties } from "widgets/index";

const properties: WidgetProperties = {
  widgetType: "totd-chemical-elements",
  category: "knowledge",
  configurable: false,
  hasSaga: true,
  initialHeight: 2,
  initialWidth: 2,
  initialOptions: {},
  initialMeta: {
    updateCycle: { hours: 24 },
    updateStatus: "idle",
  },
};

export default properties;
