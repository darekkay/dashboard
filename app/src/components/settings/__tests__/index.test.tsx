import React from "react";

import { renderConnected, screen } from "common/testing";

import Settings from "../index";

describe("<Settings />", () => {
  test("renders without errors", () => {
    renderConnected(<Settings closeModal={() => null} />);
    expect(screen.getAllByRole("heading")).toHaveLength(5);
  });
});
