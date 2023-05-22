import React, { useState } from "react";
import { Input } from "@darekkay/react-ui";

export default {
  title: "Shared Components/Forms/Input",
};

export const Variants = () => {
  const [value, setValue] = useState("Hello World");
  return (
    <div className="space-y-6">
      <Input value={value} setValue={setValue} label="Input" />
      <Input value={value} setValue={setValue} aria-label="ARIA label" />
    </div>
  );
};
