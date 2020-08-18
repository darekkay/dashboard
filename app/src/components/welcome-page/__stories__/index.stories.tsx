import React from "react";
import { storiesOf } from "@storybook/react";

import WelcomePage from "../index";

const Story = () => {
  return (
    <div>
      <WelcomePage importWidgets={() => {}} saveLayout={() => {}} />
    </div>
  );
};

storiesOf("Components/WelcomePage", module).add("Variants", () => <Story />);
