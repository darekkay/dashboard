import React from "react";

import FileUpload from "../index";

export default {
  title: "Components/Forms/FileUpload",
};

export const Variants = () => {
  return (
    <div style={{ maxWidth: "700px" }}>
      <FileUpload label="Drag and drop files" />
    </div>
  );
};
