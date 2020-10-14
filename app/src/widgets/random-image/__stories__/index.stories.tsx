import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="random-image-01"
      type="random-image"
      options={{}}
      data={{}}
      meta={initialMeta("random-image")}
    />
  );
};

storiesOf("Widgets/RandomImage", module).add("Variants", () => <Story />);
