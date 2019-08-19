import React from "react";

import { storiesOf } from "@storybook/react";

import Loading from "../index";

const Story = () => {
  return (
    <div>
      <Loading />
    </div>
  );
};

storiesOf("Components.Loading", module).add("Variants", () => <Story />);
