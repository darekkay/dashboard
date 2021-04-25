import React from "react";

import Section from "components/section";

import StatsRow from "../index";

export default {
  title: "Components/StatsRow",
};

export const Variants = () => {
  return (
    <Section type="story">
      <StatsRow
        icon="star"
        labelKey="widget.github-stats.stars"
        value={12347}
      />
    </Section>
  );
};
