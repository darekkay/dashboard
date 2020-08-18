import moment from "moment";

import { initialMeta } from "../../app/src/widgets/list";

/** Synchronize the TTL (axios cache duration) with the widget's update cycle */
export const ttlForWidgetType = (widgetType: string) => {
  const { updateCycle } = initialMeta(widgetType);

  // The server cache duration is slightly lower than the widget's update cycle
  // to account for the server processing time
  return Math.max(0, moment.duration(updateCycle).asSeconds() - 30);
};
