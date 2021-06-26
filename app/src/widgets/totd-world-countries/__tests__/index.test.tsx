import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetContentProps, widgetStatusDisplay } from "common/utils/mock";

import TotdWorldCountries from "../index";

const commonProps = {
  ...widgetContentProps,
  name: "Germany",
  capital: "Berlin",
  currency: "EUR",
  languages: "German",
};

describe("<TotdWorldCountries />", () => {
  test("renders countries without a flag", () => {
    render(<TotdWorldCountries {...commonProps} />);
    expect(screen.getByText("Berlin")).toBeInTheDocument();
    expect(screen.getByText("EUR")).toBeInTheDocument();
    expect(screen.queryByAltText("Flag of Germany")).not.toBeInTheDocument();
  });

  test("renders countries with a flag", () => {
    render(<TotdWorldCountries {...commonProps} flag="image.png" />);
    expect(screen.getByAltText("Flag of Germany")).toBeInTheDocument();
  });

  test("triggers an update", () => {
    const triggerUpdate = jest.fn();
    render(
      <TotdWorldCountries {...commonProps} triggerUpdate={triggerUpdate} />
    );
    expect(triggerUpdate).toHaveBeenCalledTimes(1);
    expect(triggerUpdate).toHaveBeenCalledWith({
      id: "widget-mock-id",
      params: {},
    });
  });

  test("renders a widgetStatusDisplay when available", () => {
    render(
      <TotdWorldCountries
        {...commonProps}
        widgetStatusDisplay={widgetStatusDisplay}
      />
    );
    expect(screen.getByTestId("widget-status-display")).toBeInTheDocument();
  });
});
