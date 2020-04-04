import WidgetCategory from "../categories";

export const widgetType = "cryptocurrencies";
export const category = WidgetCategory.Monitoring;
export const initialHeight = 2;
export const initialWidth = 3;
export const initialOptions = {
  fiat: "",
  crypto: ""
};
export const initialMeta = {
  updateCycle: { minutes: 15 }
};
