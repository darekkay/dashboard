import React from "react";

import { renderConnected, screen } from "common/testing";

import App from "../index";

describe("<App>", () => {
  test("renders without errors", () => {
    renderConnected(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("banner", { hidden: true })).toBeInTheDocument();
  });
});
