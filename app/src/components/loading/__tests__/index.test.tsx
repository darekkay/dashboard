import React from "react";

import { render, screen } from "common/testing";

import Loading from "../index";

describe("<Loading />", () => {
  test("renders a spinner", () => {
    render(<Loading type="spinner" />);
    expect(
      screen.getByRole("progressbar", { name: /common.loading/i })
    ).toBeInTheDocument();
  });

  test("renders a spinner", () => {
    render(<Loading type="skeleton" />);
    expect(
      screen.getByRole("progressbar", { name: /common.loading/i })
    ).toBeInTheDocument();
  });
});
