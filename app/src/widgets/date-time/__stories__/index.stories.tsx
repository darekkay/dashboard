import React from "react";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

export default {
  title: "Widgets/DateTime",
};

export const Variants = () => {
  return (
    <Widget
      {...widgetProps}
      id="date-time-01"
      type="date-time"
      data={{
        headline: "",
        timezone: "auto",
      }}
    />
  );
};
