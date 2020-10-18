import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="random-image-01"
      type="random-image"
      options={{}}
      data={{
        imageUrl:
          "https://images.unsplash.com/photo-1600056926106-78f915b94f63?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mzg3NX0",
        authorName: "Josh Withers",
        authorUrl: "https://ahoyjosh.com",
        altText: "penguins on white sand during daytime",
      }}
      meta={initialMeta("random-image")}
    />
  );
};

storiesOf("Widgets/RandomImage", module).add("Variants", () => <Story />);
