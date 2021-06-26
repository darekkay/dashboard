import React from "react";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

export default {
  title: "Widgets/Search",
};

export const Variants = () => {
  return (
    <Widget
      {...widgetProps}
      id="search-01"
      type="search"
      options={{ pattern: "https://duckduckgo.com/?q=%s", title: "DuckDuckGo" }}
    />
  );
};
