import React from "react";

import Loading from "components/loading";
import WidgetError from "components/widget-error";
import { WidgetMeta } from "components/widget/duck";

const WidgetStatusDisplay: React.FC<Props> = ({ meta }) => {
  if (meta.updateStatus === "idle") return null;
  if (meta.updateStatus === "pending") return <Loading />;
  if (meta.updateStatus === "error")
    return <WidgetError labelKey="error.connectionError" />;

  return null;
};

/** Handles default widget update states (idle/pending/error/success) */
export const getWidgetStatusDisplay = ({ meta, isDataEmpty }: Props) => {
  if (
    !isDataEmpty ||
    meta.updateStatus === undefined ||
    meta.updateStatus === "success"
  )
    return null;
  return <WidgetStatusDisplay meta={meta} isDataEmpty={isDataEmpty} />;
};

export interface Props {
  meta: WidgetMeta;
  isDataEmpty: boolean;
}

export default WidgetStatusDisplay;
