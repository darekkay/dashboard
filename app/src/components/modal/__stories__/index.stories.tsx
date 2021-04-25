import React, { useState } from "react";

import Button from "components/button";

import Modal from "../index";

export default {
  title: "Components/Modal",
};

export const Variants = () => {
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
        <div className="mt-6 text-right">
          <Button
            className="w-full md:w-auto md:ml-5 mt-5"
            outline
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="w-full md:w-auto md:ml-5 mt-5"
            onClick={() => setOpen(false)}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
};
