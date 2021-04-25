import React from "react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

export default {
  title: "Widgets/Counter",
};

export const Variants = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="counter-01"
      type="counter"
      options={{}}
      data={{ value: 5 }}
    />
  );
};
