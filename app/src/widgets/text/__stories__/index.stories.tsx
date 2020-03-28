import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="text-01"
      type="text"
      data={{ content: "Hello World!" }}
    />
  );
};

storiesOf("Widgets.Text", module).add("Variants", () => <Story />);
