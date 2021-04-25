import React from "react";

import Label from "../index";

export default {
  title: "Components/Forms/Label",
};

export const Variants = () => {
  return (
    <>
      <div>
        <Label text="Standalone label" />
      </div>
      <div>
        <Label text="Wrapping label">
          <span>Child</span>
        </Label>
      </div>
    </>
  );
};
