import React from "react";

import { storiesOf } from "@storybook/react";

import WidgetUnconfigured from "../index";

const Story = () => {
  return <WidgetUnconfigured type="image" />;
};

storiesOf("Components.WidgetUnconfigured", module).add("Variants", () => (
  <Story />
));
