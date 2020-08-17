import React from "react";
import { storiesOf } from "@storybook/react";

import Label from "../index";

const Story = () => {
  return (
    <>
      <div>
        <Label text="Standalone label" />
      </div>
      <div>
        <Label text="Wrapping label">
          <span>Child</span>
        </Label>
      </div>
    </>
  );
};

storiesOf("Components/Forms/Label", module).add("Variants", () => <Story />);
