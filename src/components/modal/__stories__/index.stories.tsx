import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import Button from "components/button";
import Modal from "../index";

const Story = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        closeModal={() => setOpen(false)}
        headline="Modal headline"
      >
        Modal content
      </Modal>
    </>
  );
};

storiesOf("Components.Modal", module).add("Variants", () => <Story />);
