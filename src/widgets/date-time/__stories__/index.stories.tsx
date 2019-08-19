import React from "react";
import _ from "lodash";
import { storiesOf } from "@storybook/react";

import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      id="date-time-01"
      type="date-time"
      options={{}}
      data={{ date: Date.now() }}
      setDataValue={_.noop}
      setOptionValue={_.noop}
      isLayoutEditable={false}
      hasError={false}
    />
  );
};

storiesOf("Widgets.DateTime", module).add("Variants", () => <Story />);
