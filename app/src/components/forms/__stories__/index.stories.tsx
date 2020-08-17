import React from "react";
import _ from "lodash";
import { storiesOf } from "@storybook/react";

import Section from "components/section";
import Input from "components/forms/input";
import TextArea from "components/forms/text-area";
import Dropdown from "components/forms/dropdown";
import FileUpload from "components/forms/file-upload";
import Label from "components/forms/label";

const Story = () => {
  return (
    <div className="space-y-6" style={{ maxWidth: "600px" }}>
      <Section type="story">
        <Input setValue={_.noop} label="Input" />
      </Section>

      <Section type="story">
        <TextArea setValue={_.noop} label="TextArea" />
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

storiesOf("Components/Forms", module).add("Showcase", () => <Story />);
