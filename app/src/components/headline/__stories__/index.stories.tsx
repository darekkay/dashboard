import React from "react";
import { storiesOf } from "@storybook/react";

import Headline from "../index";

const Story = () => {
  return (
    <div>
      <Headline level={2}>Default headline</Headline>
    </div>
  );
};

storiesOf("Components.Headline", module).add("Variants", () => <Story />);
