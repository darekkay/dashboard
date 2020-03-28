import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget {...connectedWidgetProps} id="date-time-01" type="date-time" />
  );
};

storiesOf("Widgets.DateTime", module).add("Variants", () => <Story />);
