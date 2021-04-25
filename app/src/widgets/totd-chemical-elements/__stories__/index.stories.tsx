import React from "react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

export default {
  title: "Widgets/Tip of the Day/Chemical Elements",
};

export const Variants = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="totd-chemical-elements-01"
      type="totd-chemical-elements"
      data={{
        symbol: "V",
        name: "Vanadium",
        atomicNumber: 23,
      }}
      meta={initialMeta("totd-chemical-elements")}
    />
  );
};
