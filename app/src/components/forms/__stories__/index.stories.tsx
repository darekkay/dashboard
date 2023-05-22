import React, { useState } from "react";
import { Input } from "@darekkay/react-ui";

import Section from "components/section";
import TextArea from "components/forms/text-area";
import Dropdown from "components/forms/dropdown";
import DatePicker from "components/forms/date-picker";
import FileUpload from "components/forms/file-upload";
import Label from "components/forms/label";

export default {
  title: "Components/Forms",
};

export const Showcase = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="space-y-6">
      <Section type="story">
        <Input value={inputValue} setValue={setInputValue} label="Input" />
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
        <DatePicker label="Date picker" setValue={() => null} />
      </Section>

      <Section type="story">
        <Label text="FileUpload">
          <FileUpload label="Drag and drop files" />
        </Label>
      </Section>
    </div>
  );
};
