import React from "react";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

export default {
  title: "Widgets/Counter",
};

export const Variants = () => {
  return (
    <Widget
      {...widgetProps}
      id="counter-01"
      type="counter"
      options={{}}
      data={{ value: 5 }}
    />
  );
};
