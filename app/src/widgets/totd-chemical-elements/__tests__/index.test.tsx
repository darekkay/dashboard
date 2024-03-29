import React from "react";

import { render, screen } from "common/testing";
import { widgetContentProps, widgetStatusDisplay } from "common/utils/mock";

import ChemicalElements from "../index";

const commonProps = {
  ...widgetContentProps,
  symbol: "H",
  atomicNumber: 1,
  name: "Hydrogen",
  nameDE: "Wasserstoff",
};

describe("<ChemicalElements />", () => {
  test("renders a chemical element", () => {
    render(<ChemicalElements {...commonProps} />);
    expect(screen.getByText("Hydrogen")).toBeInTheDocument();
  });

  test("triggers an update", () => {
    const triggerUpdate = jest.fn();
    render(<ChemicalElements {...commonProps} triggerUpdate={triggerUpdate} />);
    expect(triggerUpdate).toHaveBeenCalledTimes(1);
    expect(triggerUpdate).toHaveBeenCalledWith({
      id: "widget-mock-id",
      params: {},
    });
  });

  test("renders a widgetStatusDisplay when available", () => {
    render(
      <ChemicalElements
        {...commonProps}
        widgetStatusDisplay={widgetStatusDisplay}
      />
    );
    expect(screen.getByTestId("widget-status-display")).toBeInTheDocument();
  });
});
