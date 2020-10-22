import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="totd-world-countries-01"
      type="totd-world-countries"
      options={{}}
      data={{
        name: "Armenia",
        capital: "Yerevan",
        currency: "Armenian Dram",
        languages: "Armenian",
        flag:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iLTMgLTEuNSA2IDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCjxnIGZpbGw9Im5vbmUiPg0KPHBhdGggc3Ryb2tlPSIjZjAwIiBkPSJtLTMtMWg2Ii8+DQo8cGF0aCBzdHJva2U9IiMwMDAwZDYiIGQ9Im0tMywwaDYiLz4NCjxwYXRoIHN0cm9rZT0iI2ZmYjEwMCIgZD0ibS0zLDFoNiIvPg0KPC9nPg0KPC9zdmc+DQo=",
      }}
      meta={initialMeta("totd-world-countries")}
    />
  );
};

storiesOf("Widgets/Tip of the Day/World Countries", module).add(
  "Variants",
  () => <Story />
);
