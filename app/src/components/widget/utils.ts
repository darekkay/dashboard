import moment from "moment";

import { WidgetMeta } from "components/widget/duck";

/** @deprecated */
export const shouldTriggerUpdate = (
  { lastUpdated, updateCycle, updateStatus }: WidgetMeta,
  currentDate: number = Date.now()
) => {
  // widget does not support updates
  if (updateCycle === undefined) return false;

  // widget is already updating
  if (updateStatus === "pending") return false;

  // widget has never been updated before
  if (lastUpdated === undefined) return true;

  const differenceInSeconds = moment
    .duration(updateCycle)
    .subtract(moment(currentDate).diff(lastUpdated))
    .asSeconds();
  return differenceInSeconds <= 0;
};
