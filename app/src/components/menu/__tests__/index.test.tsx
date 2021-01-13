import React from "react";

import { render, screen, userEvent, expectToThrow } from "common/testing";

import Menu, { MenuAction, MenuSeparator } from "../index";

describe("<Menu />", () => {
  test("renders required aria attributes", async () => {
    render(
      <Menu icon="cog" title="title">
        <MenuAction text="Item 1" icon="cog" />
        <MenuSeparator />
        <MenuAction text="Item 2" icon="edit" />
      </Menu>
    );

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    // open the menu
    userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getAllByRole("menuitem")).toHaveLength(2);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  test("doesn't allow MenuAction to be used outside of a Menu", () => {
    expectToThrow(() => render(<MenuAction text="Item 1" icon="cog" />));
  });

  test("handles menu buttons", async () => {
    const onClick = jest.fn();
    render(
      <Menu icon="cog" title="title">
        <MenuAction text="Item 1" icon="cog" onClick={onClick} />
      </Menu>
    );

    // open the menu
    userEvent.click(screen.getByRole("button"));

    const menuButton = screen.getByRole("menuitem");
    expect(onClick).toHaveBeenCalledTimes(0);
    userEvent.click(menuButton);
    expect(onClick).toHaveBeenCalledTimes(1);

    // the menu should close on click
    expect(screen.queryByRole("menuitem")).not.toBeInTheDocument();
  });

  test("handles menu links", async () => {
    const windowOpenSpy = jest
      .spyOn(window, "open")
      .mockImplementation(() => null);

    render(
      <Menu icon="cog" title="title">
        <MenuAction text="Item 1" icon="cog" href="https://example.com" />
      </Menu>
    );

    // open the menu
    userEvent.click(screen.getByRole("button"));

    const menuLink = screen.getByRole("menuitem");
    expect(windowOpenSpy).toHaveBeenCalledTimes(0);
    userEvent.click(menuLink);

    // opens the menu link in a new window
    expect(windowOpenSpy).toHaveBeenCalledTimes(1);
    expect(windowOpenSpy).toHaveBeenCalledWith("https://example.com", "_blank");

    // the menu should close on click
    expect(screen.queryByRole("menuitem")).not.toBeInTheDocument();
  });
});
