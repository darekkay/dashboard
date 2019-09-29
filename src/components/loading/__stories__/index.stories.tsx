import React from "react";

import { storiesOf } from "@storybook/react";

import Loading from "../index";

const Story = () => {
  return (
    <>
      <h2 className="mb-5">Spinner</h2>
      <Loading type="spinner" />

      <h2 className="my-5">Skeleton</h2>
      <div style={{ height: "200px", width: "100%" }}>
        <Loading type="skeleton" />
      </div>
    </>
  );
};

storiesOf("Components.Loading", module).add("Variants", () => <Story />);
