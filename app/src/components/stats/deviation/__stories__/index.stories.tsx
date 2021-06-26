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
        <Deviation className="justify-center" value={10} />
      </Section>

      <Section type="story" headline="Decrement">
        <Deviation className="justify-center" value={-10} />
      </Section>

      <Section type="story" headline="No change">
        <Deviation className="justify-center" value={0} />
      </Section>

      <Section type="story" headline="With unit">
        <Deviation className="justify-center" value={10} unit="€" />
      </Section>

      <Section type="story" headline="With percentage">
        <Deviation
          className="justify-center"
          value={27}
          unit="€"
          percentage={1.6}
        />
      </Section>

      <Section type="story" headline="No change, with percentage">
        <Deviation
          className="justify-center"
          value={0}
          unit="$"
          percentage={0}
        />
      </Section>

      <Section type="story" headline="Custom style">
        <Deviation
          className="justify-center text-6 font-bold"
          value={-10}
          unit="%"
        />
      </Section>
    </div>
  );
};
