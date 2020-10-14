import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import RandomImage from "../index";

describe("<RandomImage />", () => {
  test("renders without errors", () => {
    render(
      <RandomImage
        {...widgetProps}
        id="random-image-mock-id"
      />
    );
    expect(screen.getByRole("TODO", { name: /TODO text/i })).toBeInTheDocument();
  });
});
