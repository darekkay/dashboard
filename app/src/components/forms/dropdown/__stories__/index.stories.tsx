import React from "react";

import { storiesOf } from "@storybook/react";

import Section from "components/section";
import Dropdown from "../index";

const Story = () => {
  return (
    <Section type="story">
      <Dropdown
        label="Dropdown"
        setValue={() => null}
        options={["", "Apple", "Orange", "Banana"]}
        className="mb-6"
      />
      <Dropdown
        label="Dropdown with label function"
        setValue={() => null}
        options={["", "apple", "orange", "banana"]}
        getOptionLabel={option => option.toUpperCase()}
      />
    </Section>
  );
};

storiesOf("Components.Forms.Dropdown", module).add("Variants", () => <Story />);
