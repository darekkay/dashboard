import { Request } from "express";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import logger from "@darekkay/logger";

import widgets from "./widgets";

dayjs.extend(duration);

export const DEFAULT_TTL = 600;
export const TTL_OFFSET = 30;

/** Synchronize the TTL (time to live = axios cache duration) with the widget's update cycle */
export const ttlForWidgetType = (widgetType: string) => {
  if (!widgets[widgetType]) {
    logger.error(`Unknown widget: ${widgetType}`);
    return DEFAULT_TTL;
  }

  const { updateCycle } = widgets[widgetType];

  if (updateCycle === undefined) {
    logger.error(`TTL not defined for '${widgetType}'`);
    return DEFAULT_TTL;
  }

  // The server cache duration is slightly lower than the widget's update cycle
  // to account for the server processing time
  return Math.max(0, dayjs.duration(updateCycle).asSeconds() - TTL_OFFSET);
};

export const requestContains = (req: Request, value: string) => {
  return [
    req.headers["x-dashboard-referrer"],
    req.headers.referer,
    req.url,
  ].some((url) => url?.includes(value));
};
