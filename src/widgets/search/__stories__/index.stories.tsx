import React from "react";
import _ from "lodash";
import { storiesOf } from "@storybook/react";

import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      id="search-01"
      type="search"
      options={{ pattern: "https://duckduckgo.com/?q=%s", title: "DuckDuckGo" }}
      data={{}}
      meta={{}}
      setData={_.noop}
      setOptions={_.noop}
      triggerUpdate={_.noop}
      removeWidgetFromLayout={_.noop}
      isLayoutEditable={false}
      hasError={false}
    />
  );
};

storiesOf("Widgets.Search", module).add("Variants", () => <Story />);
