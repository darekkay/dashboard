import React from "react";

import { render, screen } from "common/testing";

import Headline from "../index";

describe("<Headline />", () => {
  test("renders without errors", async () => {
    const { container } = render(
      <Headline level={3}>Default headline</Headline>
    );
    expect(
      screen.getByRole("heading", { name: /default headline/i })
    ).toBeInTheDocument();
    expect(container.querySelectorAll("h3")).toHaveLength(1);
  });
});
