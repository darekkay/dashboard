import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";
import Chart from "widgets/chart/index";
import { data } from "widgets/chart/__tests__/index.test";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="chart-01"
      type="chart"
      options={{
        url: "https://example.com",
      }}
      data={{
        data: [
          { x: "1", y: 3 },
          { x: "2", y: 1 },
          { x: "3", y: 5 },
          { x: "4", y: 4 },
        ],
        dataPath: "data",
      }}
      meta={initialMeta("chart")}
    />
  );
};

storiesOf("Widgets/Chart", module).add("Variants", () => <Story />);
