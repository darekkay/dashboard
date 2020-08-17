import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import Input from "../index";

const Story = () => {
  const [value, setValue] = useState("Hello World");
  return (
    <div className="space-y-6">
      <Input value={value} setValue={setValue} label="Input" />
      <Input value={value} setValue={setValue} aria-label="ARIA label" />
    </div>
  );
};

storiesOf("Components/Forms/Input", module).add("Variants", () => <Story />);
