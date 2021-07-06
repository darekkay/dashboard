import React, { useState } from "react";

import Section from "components/section";

import DatePicker from "../index";

export default {
  title: "Components/Forms/DatePicker",
};

export const Variants = () => {
  const [date, setDate] = useState("");
  return (
    <div className="space-y-6">
      <Section type="story">
        <div>
          <DatePicker setValue={setDate} />
        </div>
        <div>Selected date: {date}</div>
      </Section>
    </div>
  );
};
