import React from "react";
import _ from "lodash";
import { storiesOf } from "@storybook/react";

import TextArea from "../index";

const Story = () => {
  return <TextArea setValue={_.noop} label="TextArea" />;
};

storiesOf("Components.Forms.TextArea", module).add("Variants", () => <Story />);
