import React from "react";
import _ from "lodash";
import { storiesOf } from "@storybook/react";

import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      id="totd-chemical-elements-01"
      type="totd-chemical-elements"
      options={{}}
      data={{
        symbol: "V",
        name: "Vanadium",
        atomicNumber: 23
      }}
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

storiesOf("Widgets.Tip of the Day.Chemical Elements", module).add(
  "Variants",
  () => <Story />
);
