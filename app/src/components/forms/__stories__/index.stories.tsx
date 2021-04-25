import React from "react";

import Section from "components/section";
import Input from "components/forms/input";
import TextArea from "components/forms/text-area";
import Dropdown from "components/forms/dropdown";
import FileUpload from "components/forms/file-upload";
import Label from "components/forms/label";

export default {
  title: "Components/Forms",
};

export const Showcase = () => {
  return (
    <div className="space-y-6" style={{ maxWidth: "600px" }}>
      <Section type="story">
        <Input setValue={() => {}} label="Input" />
      </Section>

      <Section type="story">
        <TextArea setValue={() => {}} label="TextArea" />
      </Section>

      <Section type="story">
        <Dropdown
          label="Dropdown"
          setValue={() => null}
          options={["", "Apple", "Orange", "Banana"]}
        />
      </Section>

      <Section type="story">
        <div style={{ maxWidth: "700px" }}>
          <Label text="FileUpload">
            <FileUpload label="Drag and drop files" />
          </Label>
        </div>
      </Section>
    </div>
  );
};
