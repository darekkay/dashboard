import React from "react";

import { render, screen } from "common/testing";

import Headline from "../index";

describe("<Headline />", () => {
  test("renders a level 2 headline by default", async () => {
    const { container } = render(<Headline>Default level</Headline>);
    expect(
      screen.getByRole("heading", { name: /default level/i })
    ).toBeInTheDocument();
    expect(container.querySelectorAll("h2")).toHaveLength(1);
  });

  test("renders a custom headine level", async () => {
    const { container } = render(<Headline level={3}>Custom level</Headline>);
    expect(
      screen.getByRole("heading", { name: /custom level/i })
    ).toBeInTheDocument();
    expect(container.querySelectorAll("h3")).toHaveLength(1);
  });
});
