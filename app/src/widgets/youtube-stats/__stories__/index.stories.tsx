import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="youtube-stats-01"
      type="youtube-stats"
      options={{}}
      data={{}}
    />
  );
};

storiesOf("Widgets/YoutubeStats", module).add("Variants", () => <Story />);
