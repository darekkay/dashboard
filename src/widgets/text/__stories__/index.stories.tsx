import React from "react";
import _ from "lodash";
import { storiesOf } from "@storybook/react";

import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      id="text-01"
      type="text"
      options={{}}
      data={{ content: "Hello World!" }}
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

storiesOf("Widgets.Text", module).add("Variants", () => <Story />);
