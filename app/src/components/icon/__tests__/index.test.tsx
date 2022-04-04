import React from "react";

import { render, screen } from "common/testing";

import Icon from "../index";

describe("<Icon />", () => {
  test("renders a font awesome icon", () => {
    render(<Icon name="cog" alt="Settings" />);
    expect(screen.getByLabelText(/settings/i)).toBeInTheDocument();
  });

  test("does not render unknown icons", () => {
    // @ts-expect-error
    expect(() => render(<Icon name="c01c4b" />)).toThrow();
  });
});
