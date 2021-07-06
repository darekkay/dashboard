import React from "react";

import Section from "components/section";

import DatePicker from "../index";

export default {
  title: "Components/Forms/DatePicker",
};

export const Variants = () => {
  return (
    <div className="space-y-6">
      <Section type="story">
        <DatePicker setValue={() => null} />
      </Section>
    </div>
  );
};
