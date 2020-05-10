import React from "react";
import _ from "lodash";

import { render, screen, userEvent } from "common/testing";

import WelcomePage from "../index";

describe("<WelcomePage />", () => {
  test("renders without errors", () => {
    render(<WelcomePage importWidgets={_.noop} saveLayout={_.noop} />);
    expect(screen.getByText("welcome.message1")).toBeInTheDocument();
  });

  test("creates a board from template", () => {
    const importWidgets = jest.fn();
    const saveLayout = jest.fn();
    render(
      <WelcomePage importWidgets={importWidgets} saveLayout={saveLayout} />
    );

    expect(importWidgets).not.toHaveBeenCalled();
    expect(saveLayout).not.toHaveBeenCalled();

    const button = screen.getByRole("button", {
      name: "welcome.createExampleBoard"
    });
    userEvent.click(button);

    expect(importWidgets).toHaveBeenCalledTimes(1);
    expect(saveLayout).toHaveBeenCalledTimes(1);
  });
});
