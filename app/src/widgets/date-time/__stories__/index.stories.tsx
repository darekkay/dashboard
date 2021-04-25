import React from "react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

export default {
  title: "Widgets/DateTime",
};

export const Variants = () => {
  return (
    <Widget {...connectedWidgetProps} id="date-time-01" type="date-time" />
  );
};
