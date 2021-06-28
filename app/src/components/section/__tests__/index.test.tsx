import React from "react";

import { render, screen } from "common/testing";

import Section from "../index";

describe("<Section />", () => {
  test("renders a headline when provided", () => {
    const { rerender } = render(<Section type="app" />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    rerender(<Section type="app" headline="Section headline" />);
    expect(
      screen.getByRole("heading", { name: /section headline/i })
    ).toBeInTheDocument();
  });
});
