import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
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

storiesOf("Widgets/Counter", module).add("Variants", () => <Story />);
