import WidgetCategory from "../categories";
import { Props as ConfigurationProps } from "./configuration";

export const widgetType = "date-time";
export const category: WidgetCategory = "general";
export const initialHeight = 2;
export const initialWidth = 3;
export const initialOptions: ConfigurationProps = {
  headline: "",
  timezone: "auto",
};
export const initialMeta = {};
