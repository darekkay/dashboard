import React from "react";

import { storiesOf } from "@storybook/react";

import Deviation from "components/stats/deviation/index";

const Story = () => {
  return (
    <div>
      {/* TODO: section component */}
      <Deviation value={10} />
      <Deviation value={-10} />
      <Deviation value={0} />
      <Deviation value={10} unit="%" />
      <Deviation value={-10} unit="%" className="text-5 font-bold" />
    </div>
  );
};

storiesOf("Components.Stats.Deviation", module).add("Variants", () => (
  <Story />
));
