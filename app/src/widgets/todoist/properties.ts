import WidgetCategory from "../categories";

export const widgetType = "todoist";
export const category = WidgetCategory.Monitoring;
export const initialHeight = 2;
export const initialWidth = 3;
export const initialOptions = {
  token: "xxxxx"
};
export const initialMeta = {
  updateCycle: { minutes: 15 }
};
