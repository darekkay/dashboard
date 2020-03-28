import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="image-01"
      type="image"
      options={{
        url:
          "https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }}
    />
  );
};

storiesOf("Widgets.Image", module).add("Variants", () => <Story />);
