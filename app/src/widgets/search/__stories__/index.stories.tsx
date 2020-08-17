import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="search-01"
      type="search"
      options={{ pattern: "https://duckduckgo.com/?q=%s", title: "DuckDuckGo" }}
    />
  );
};

storiesOf("Widgets/Search", module).add("Variants", () => <Story />);
