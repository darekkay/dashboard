import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

const Story = () => {
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

storiesOf("Widgets/Tip of the Day/Chemical Elements", module).add(
  "Variants",
  () => <Story />
);
