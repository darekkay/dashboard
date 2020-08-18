import React from "react";
import { storiesOf } from "@storybook/react";

import TextArea from "../index";

const Story = () => {
  return <TextArea setValue={() => {}} label="TextArea" />;
};

storiesOf("Components/Forms/TextArea", module).add("Variants", () => <Story />);
