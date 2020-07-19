import React from "react";

import { storiesOf } from "@storybook/react";

import Section from "components/section";
import Loading from "../index";

const Story = () => {
  return (
    <div className="space-y-6">
      <Section type="story" headline="Spinner">
        <Loading type="spinner" />
      </Section>

      <Section type="story" headline="Skeleton">
        <div style={{ height: "200px", width: "100%" }}>
          <Loading type="skeleton" />
        </div>
      </Section>
    </div>
  );
};

storiesOf("Components.Loading", module).add("Variants", () => <Story />);
