import React from "react";
import { storiesOf } from "@storybook/react";

import Section from "../index";

const Story = () => {
  return (
    <div>
      <Section type="modal" headline="Section headline">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          vestibulum ex eget quam varius, vel tincidunt ligula placerat. Cras
          interdum felis in diam ullamcorper egestas pellentesque id dolor.
          Nulla ut erat metus.
        </div>
      </Section>
    </div>
  );
};

storiesOf("Components.Section", module).add("Variants", () => <Story />);
