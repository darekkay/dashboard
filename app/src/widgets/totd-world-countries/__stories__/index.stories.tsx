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
      data={{}}
      meta={initialMeta("totd-world-countries")}
    />
  );
};

storiesOf("Widgets/TotdWorldCountries", module).add("Variants", () => <Story />);
