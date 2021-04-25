import React from "react";

import Section from "../index";

export default {
  title: "Components/Section",
};

export const Variants = () => {
  return (
    <div>
      <Section type="modal" headline="Section headline">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          vestibulum ex eget quam varius, vel tincidunt ligula placerat. Cras
          interdum felis in diam ullamcorper egestas pellentesque id dolor.
          Nulla ut erat metus.
        </div>
      </Section>
    </div>
  );
};
