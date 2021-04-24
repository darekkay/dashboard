import WidgetCategory from "../categories";

export const widgetType = "chart";
export const category: WidgetCategory = "tracking";
export const initialHeight = 3;
export const initialWidth = 7;
export const initialOptions = {
  headline: "",
};
export const initialMeta = {
  // NICE: make update cycle configurable
  updateCycle: { hours: 24 },
  updateStatus: "idle",
};
