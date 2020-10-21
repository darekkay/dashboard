import WidgetCategory from "../categories";

export const widgetType = "youtube-stats";
export const category: WidgetCategory = "monitoring";
export const initialHeight = 3;
export const initialWidth = 3;
export const initialOptions = {};
export const initialMeta = {
  updateCycle: { hours: 24 },
  updateStatus: "idle",
  headlineIcon: "youtube",
};
