import React from "react";
import _ from "lodash";

import { storiesOf } from "@storybook/react";

import TextArea from "../index";

const Story = () => {
  return (
    <div>
      <TextArea setValue={_.noop} />
    </div>
  );
};

storiesOf("Components.Forms.TextArea", module).add("Variants", () => <Story />);
