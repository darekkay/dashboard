import React from "react";
import { storiesOf } from "@storybook/react";

import FileUpload from "../index";

const Story = () => {
  return (
    <div style={{ maxWidth: "700px" }}>
      <FileUpload label="Drag and drop files" />
    </div>
  );
};

storiesOf("Components/Forms/FileUpload", module).add("Variants", () => (
  <Story />
));
