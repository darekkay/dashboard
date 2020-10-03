import React from "react";
import { storiesOf } from "@storybook/react";

import Section from "components/section";

import StatsRow from "../index";

const Story = () => {
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

storiesOf("Components/StatsRow", module).add("Variants", () => <Story />);
