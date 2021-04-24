import React from "react";
import { storiesOf } from "@storybook/react";

import Section from "components/section";

import LineChart from "../index";
import { data } from "../__tests__/index.test";

const Story = () => {
  return (
    <div className="space-y-6" style={{ maxWidth: "600px" }}>
      <Section type="story">
        <div style={{ height: "300px", width: "500px" }}>
          <LineChart data={data} dataKeyX="time" dataKeyY="visitors" />
        </div>
      </Section>
    </div>
  );
};

storiesOf("Components/Charts/Line Chart", module).add("Variants", () => (
  <Story />
));
