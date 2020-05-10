import React from "react";
import { render, screen } from "common/testing";

import Section from "../index";

describe("<Section />", () => {
  test("renders a headline when provided", () => {
    const { rerender } = render(<Section type="modal" />);
    expect(screen.queryByRole("heading")).toBeNull();
    rerender(<Section type="modal" headline="Section headline" />);
    expect(
      screen.getByRole("heading", { name: /section headline/i })
    ).toBeInTheDocument();
  });
});
