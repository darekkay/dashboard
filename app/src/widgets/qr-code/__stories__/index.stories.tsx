import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="qr-code-01"
      type="qr-code"
      options={{ content: "https://dashboard.darekkay.com/" }}
      data={{}}
    />
  );
};

storiesOf("Widgets.QrCode", module).add("Variants", () => <Story />);
