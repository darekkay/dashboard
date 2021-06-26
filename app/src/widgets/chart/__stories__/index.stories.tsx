import React from "react";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

export default {
  title: "Widgets/Chart",
};

export const Variants = () => {
  return (
    <Widget
      {...widgetProps}
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
