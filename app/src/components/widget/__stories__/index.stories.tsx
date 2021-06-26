import React from "react";

import { widgetProps } from "common/utils/mock";
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
    <div className="space-y-6">
      <Section type="story" headline="Regular">
        <Widget {...widgetProps} {...sharedProps} id="search-01" />
      </Section>
    </div>
  );
};
