import React, { useState } from "react";

import { storiesOf } from "@storybook/react";

import Input from "../index";

const Story = () => {
  const [value, setValue] = useState("Hello World");
  return (
    <div>
      <Input value={value} setValue={setValue} />
    </div>
  );
};

storiesOf("Components.Input", module).add("Variants", () => <Story />);
