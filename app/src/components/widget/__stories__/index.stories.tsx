import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import Section from "components/section";

const Story = () => {
  const sharedProps = {
    type: "search",
    options: { pattern: "https://duckduckgo.com/?q=%s", title: "DuckDuckGo" },
  };
  return (
    <div className="space-y-6" style={{ maxWidth: "500px" }}>
      <Section type="story" headline="Regular">
        <Widget id="search-01" {...connectedWidgetProps} {...sharedProps} />
      </Section>

      <Section type="story" headline="Error">
        <Widget
          id="search-02"
          {...connectedWidgetProps}
          {...sharedProps}
          hasError
        />
      </Section>
    </div>
  );
};

storiesOf("Components/Widget", module).add("Variants", () => <Story />);
