import React from "react";
import { render, screen } from "common/testing";

import Button from "../index";

describe("<Button />", () => {
  test("renders without errors", () => {
    render(<Button>Example</Button>);
    expect(
      screen.getByRole("button", { name: /example/i })
    ).toBeInTheDocument();
  });
});
