import React from "react";

import { storiesOf } from "@storybook/react";

import Section from "components/section";
import Deviation from "../index";

const Story = () => {
  return (
    <>
      <Section type="story" headline="Increment">
        <Deviation value={10} />
      </Section>

      <Section type="story" headline="Decrement">
        <Deviation value={-10} />
      </Section>

      <Section type="story" headline="No change">
        <Deviation value={0} />
      </Section>

      <Section type="story" headline="With unit">
        <Deviation value={10} unit="%" />
      </Section>

      <Section type="story" headline="Custom style">
        <Deviation value={-10} unit="%" className="text-5 font-bold" />
      </Section>
    </>
  );
};

storiesOf("Components.Stats.Deviation", module).add("Variants", () => (
  <Story />
));
