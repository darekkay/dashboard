import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="todoist-mock-id"
      type="todoist"
      data={{
        token: "xxxx"
      }}
    />
  );
};

storiesOf("Widgets.Todoist", module).add("Variants", () => <Story />);
