import React from "react";
import _ from "lodash";
import { storiesOf } from "@storybook/react";

import WelcomePage from "../index";

const Story = () => {
  return (
    <div>
      <WelcomePage importWidgets={_.noop} saveLayout={_.noop} />
    </div>
  );
};

storiesOf("Components/WelcomePage", module).add("Variants", () => <Story />);
