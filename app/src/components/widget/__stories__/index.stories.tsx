import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
  const sharedProps = {
    type: "search",
    options: { pattern: "https://duckduckgo.com/?q=%s", title: "DuckDuckGo" }
  };
  return (
    <div style={{ maxWidth: "500px" }}>
      <h2 className="mb-2 font-bold">Regular</h2>
      <Widget id="search-01" {...connectedWidgetProps} {...sharedProps} />

      <h2 className="mb-2 mt-5 font-bold">Error</h2>
      <Widget
        id="search-01"
        {...connectedWidgetProps}
        {...sharedProps}
        hasError
      />
    </div>
  );
};

storiesOf("Components.Widget", module).add("Variants", () => <Story />);
