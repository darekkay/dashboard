import React from "react";

import Section from "components/section";

import WidgetStatusDisplay from "../index";

export default {
  title: "Components/WidgetStatusDisplay",
};

export const Variants = () => {
  return (
    <>
      <Section type="story" headline="Idle">
        <WidgetStatusDisplay
          meta={{ updateStatus: "idle" }}
          isDataEmpty={false}
        />
      </Section>

      <Section type="story" headline="Pending">
        <WidgetStatusDisplay
          meta={{ updateStatus: "pending" }}
          isDataEmpty={false}
        />
      </Section>

      <Section type="story" headline="Error">
        <WidgetStatusDisplay
          meta={{ updateStatus: "error" }}
          isDataEmpty={false}
        />
      </Section>
    </>
  );
};
