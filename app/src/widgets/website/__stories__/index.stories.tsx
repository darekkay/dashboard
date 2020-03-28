import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="website-01"
      type="website"
      options={{ url: "https://dashboard.darekkay.com/docs/" }}
      data={{}}
    />
  );
};

storiesOf("Widgets.Website", module).add("Variants", () => <Story />);
