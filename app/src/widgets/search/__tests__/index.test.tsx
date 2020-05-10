import React from "react";
import { render, screen, fireEvent, userEvent } from "common/testing";

import { widgetProps } from "common/utils/mock";

import Search, { Props } from "../index";

describe("<Search />", () => {
  const renderSearch = (props: Partial<Props>) =>
    render(
      <Search
        {...widgetProps}
        id="search-mock-id"
        title="Search"
        pattern="https://example.com?s=%s"
        {...props}
      />
    );

  test("renders without errors", () => {
    renderSearch({});

    expect(screen.getByRole("searchbox"));
    expect(screen.queryByText("widget.common.unconfigured")).toBeNull();
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
    await userEvent.type(searchInput, "moo");

    // search should be triggered on button click
    const searchButton = screen.getByRole("button", {
      name: "widget.search.buttonAriaLabel"
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
    await fireEvent.keyUp(searchInput, { which: 13, key: "Enter" });
    expect(windowOpenSpy).toHaveBeenCalledTimes(1);

    // pressing Enter in a non-empty field triggers a search
    await userEvent.type(searchInput, "moo");
    await fireEvent.keyUp(searchInput, { which: 13, key: "Enter" });
    expect(windowOpenSpy).toHaveBeenCalledTimes(2);
  });
});
