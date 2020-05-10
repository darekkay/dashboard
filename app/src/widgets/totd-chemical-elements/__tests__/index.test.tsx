import React from "react";
import { render, screen } from "common/testing";

import { widgetProps } from "common/utils/mock";

import ChemicalElements from "../index";

describe("<ChemicalElements />", () => {
  test("renders without errors", () => {
    render(
      <ChemicalElements
        {...widgetProps}
        id="totd-chemical-elements-mock-id"
        symbol="V"
        atomicNumber="23"
        name="Vanadium"
        nameDE="Vanadium"
      />
    );

    expect(screen.getByText("Vanadium")).toBeInTheDocument();
  });

  test("triggers an update", () => {
    const triggerUpdate = jest.fn();
    render(
      <ChemicalElements
        {...widgetProps}
        id="totd-chemical-elements-mock-id"
        symbol="V"
        atomicNumber="23"
        name="Vanadium"
        nameDE="Vanadium"
        triggerUpdate={triggerUpdate}
      />
    );
    expect(triggerUpdate).toHaveBeenCalledTimes(1);
    expect(triggerUpdate).toHaveBeenCalledWith({
      id: "totd-chemical-elements-mock-id",
      params: {}
    });
  });
});
