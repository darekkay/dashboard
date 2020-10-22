import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import TotdWorldCountries from "../index";

describe("<TotdWorldCountries />", () => {
  test("renders without errors", () => {
    render(
      <TotdWorldCountries
        {...widgetProps}
        id="totd-world-countries-mock-id"
        name="Germany"
        capital="Berlin"
        currency="EUR"
        languages="German"
      />
    );
    expect(screen.getByText("Berlin")).toBeInTheDocument();
    expect(screen.getByText("EUR")).toBeInTheDocument();
  });

  test("triggers an update", () => {
    const triggerUpdate = jest.fn();
    render(
      <TotdWorldCountries
        {...widgetProps}
        id="totd-world-countries-mock-id"
        name="Germany"
        capital="Berlin"
        currency="EUR"
        languages="German"
        triggerUpdate={triggerUpdate}
      />
    );
    expect(triggerUpdate).toHaveBeenCalledTimes(1);
    expect(triggerUpdate).toHaveBeenCalledWith({
      id: "totd-world-countries-mock-id",
      params: {},
    });
  });
});
