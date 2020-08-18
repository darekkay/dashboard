import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

import widgets from "./widgets";

/** Synchronize the TTL (axios cache duration) with the widget's update cycle */
export const ttlForWidgetType = (widgetType: string) => {
  const { updateCycle } = widgets[widgetType];

  // The server cache duration is slightly lower than the widget's update cycle
  // to account for the server processing time
  return Math.max(0, dayjs.duration(updateCycle).asSeconds() - 30);
};
