import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import TotdWorldCountries from "../index";

const commonProps = {
  ...widgetProps,
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
});
