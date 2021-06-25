import React from "react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import Section from "components/section";

export default {
  title: "Components/Widget",
};

export const Variants = () => {
  const sharedProps = {
    type: "search" as const,
    options: { pattern: "https://duckduckgo.com/?q=%s", title: "DuckDuckGo" },
  };
  return (
    <div className="space-y-6" style={{ maxWidth: "500px" }}>
      <Section type="story" headline="Regular">
        <Widget {...connectedWidgetProps} {...sharedProps} id="search-01" />
      </Section>
    </div>
  );
};
