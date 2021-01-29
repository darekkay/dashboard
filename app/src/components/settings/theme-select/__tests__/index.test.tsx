import React from "react";

import { render, screen, userEvent } from "common/testing";

import { ThemeSelect } from "../index";

describe("<ThemeSelect />", () => {
  test("changes the theme", () => {
    const changeThemeSpy = jest.fn();
    render(<ThemeSelect theme="default" changeTheme={changeThemeSpy} />);

    const defaultTheme = screen.getByRole("button", {
      name: "config.theme.default",
    });
    userEvent.click(defaultTheme);
    expect(changeThemeSpy).toHaveBeenCalledWith("default");

    const darkTheme = screen.getByRole("button", { name: "config.theme.dark" });
    userEvent.click(darkTheme);
    expect(changeThemeSpy).toHaveBeenCalledWith("dark");
  });
});
