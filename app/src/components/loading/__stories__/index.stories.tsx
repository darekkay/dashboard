import React from "react";

import Section from "components/section";

import Loading from "../index";

export default {
  title: "Components/Loading",
};

export const Variants = () => {
  return (
    <div className="space-y-6">
      <Section type="story" headline="Spinner">
        <Loading type="spinner" />
      </Section>

      <Section type="story" headline="Skeleton">
        <div style={{ height: "200px" }}>
          <Loading type="skeleton" />
        </div>
      </Section>
    </div>
  );
};
