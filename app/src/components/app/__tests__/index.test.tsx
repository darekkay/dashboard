import React from "react";

import { renderConnected, screen } from "common/testing";

import App from "../index";

describe("<App>", () => {
  test("renders without errors", () => {
    renderConnected(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();

    // TODO: replace when the issue is fixed
    // "banner" role is currently broken: https://github.com/testing-library/dom-testing-library/issues/578
    // expect(screen.getByRole("banner", { hidden: true })).toBeInTheDocument();
  });
});
