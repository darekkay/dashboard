import React from "react";

import { render, screen, userEvent } from "common/testing";

import WelcomePage from "../index";

describe("<WelcomePage />", () => {
  test("renders without errors", () => {
    render(<WelcomePage importState={() => {}} />);
    expect(screen.getByText("welcome.message1")).toBeInTheDocument();
  });

  test("creates a board from template", () => {
    const importState = jest.fn();
    render(<WelcomePage importState={importState} />);

    expect(importState).not.toHaveBeenCalled();

    const button = screen.getByRole("button", {
      name: "welcome.createExampleBoard",
    });
    userEvent.click(button);

    expect(importState).toHaveBeenCalledTimes(1);
  });
});
