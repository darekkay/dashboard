import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="twitter-stats-01"
      type="twitter-stats"
      options={{
        username: "darek_kay",
      }}
      data={{
        followers: 4962,
        following: 191,
        tweets: 984289,
        listed: 0,
      }}
      meta={initialMeta("twitter-stats")}
    />
  );
};

storiesOf("Widgets/TwitterStats", module).add("Variants", () => <Story />);
