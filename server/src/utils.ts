import moment from "moment";

import availableWidgets from "../../app/src/widgets/list";

/** Synchronize the TTL (axios cache duration) with the widget's update cycle */
export const ttlForWidgetType = (widgetType: string) => {
  const { updateCycle } = (availableWidgets as Record<string, any>)[
    widgetType
  ].initialMeta;

  // The server cache duration is slightly lower than the widget's update cycle
  // to account for the server processing time
  return Math.max(0, moment.duration(updateCycle).asSeconds() - 30);
};
