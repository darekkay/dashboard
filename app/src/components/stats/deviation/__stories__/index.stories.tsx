import React from "react";

import Section from "components/section";

import Deviation from "../index";

export default {
  title: "Components/Stats/Deviation",
};

export const Variants = () => {
  return (
    <div className="space-y-6">
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
        <Deviation value={10} unit="€" />
      </Section>

      <Section type="story" headline="With percentage">
        <Deviation value={27} unit="€" percentage={1.6} />
      </Section>

      <Section type="story" headline="No change, with percentage">
        <Deviation value={0} unit="$" percentage={0} />
      </Section>

      <Section type="story" headline="Custom style">
        <Deviation value={-10} unit="%" className="text-6 font-bold" />
      </Section>
    </div>
  );
};
