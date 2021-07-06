import React from "react";

import TextArea from "../index";

export default {
  title: "Components/Forms/TextArea",
};

export const Variants = () => {
  return (
    <div className="space-y-6">
      <TextArea setValue={() => {}} label="TextArea" />
    </div>
  );
};
