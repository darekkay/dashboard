import React from "react";

import Section from "components/section";

import Dropdown from "../index";

export default {
  title: "Components/Forms/Dropdown",
};

export const Variants = () => {
  return (
    <Section type="story">
      <Dropdown
        label="Dropdown"
        setValue={() => null}
        options={["", "Apple", "Orange", "Banana"]}
      />
      <Dropdown
        label="Dropdown with label function"
        setValue={() => null}
        options={["", "apple", "orange", "banana"]}
        getOptionLabel={(option) => option.toUpperCase()}
      />
    </Section>
  );
};
