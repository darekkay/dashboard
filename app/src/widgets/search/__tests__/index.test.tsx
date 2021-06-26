import React from "react";

import { render, screen, userEvent } from "common/testing";
import { widgetContentProps } from "common/utils/mock";

import Search, { Props } from "../index";

describe("<Search />", () => {
  const renderSearch = (props: Partial<Props>) =>
    render(
      <Search
        {...widgetContentProps}
        title="Search"
        pattern="https://example.com?s=%s"
        {...props}
      />
    );

  test("renders without errors", () => {
    renderSearch({});

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(
      screen.queryByText("widget.common.unconfigured")
    ).not.toBeInTheDocument();
  });

  test("doesn't render if the pattern is missing", () => {
    renderSearch({ pattern: "" });
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  test("disables the search button if no search term is typed", () => {
    renderSearch({});
    expect(
      screen.getByRole("button", { name: "widget.search.buttonAriaLabel" })
    ).toBeDisabled();

    const searchInput = screen.getByRole("searchbox");
    userEvent.type(searchInput, "moo");

    expect(
      screen.getByRole("button", { name: "widget.search.buttonAriaLabel" })
    ).toBeEnabled();
  });

  test("triggers a search on button click or enter", async () => {
    const windowOpenSpy = jest
      .spyOn(window, "open")
      .mockImplementation(() => null);

    renderSearch({});

    const searchInput = screen.getByRole("searchbox");
    userEvent.type(searchInput, "moo");

    // search should be triggered on button click
    const searchButton = screen.getByRole("button", {
      name: "widget.search.buttonAriaLabel",
    });
    userEvent.click(searchButton);

    // opens the search in a new window
    expect(windowOpenSpy).toHaveBeenCalledTimes(1);
    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://example.com?s=moo",
      "_blank"
    );

    // the field should be empty after the search was triggered
    expect(searchInput).toHaveValue("");

    // pressing Enter in an empty field doesn't trigger a search
    userEvent.type(searchInput, "{enter}");
    expect(windowOpenSpy).toHaveBeenCalledTimes(1);

    // pressing Enter in a non-empty field triggers a search
    userEvent.type(searchInput, "moo");
    userEvent.type(searchInput, "{enter}");
    expect(windowOpenSpy).toHaveBeenCalledTimes(2);
  });
});
