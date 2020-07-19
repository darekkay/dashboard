import React from "react";

import { render, screen } from "common/testing";
import Deviation from "components/stats/deviation/index";

describe("<Deviation />", () => {
  test("renders a negative value", () => {
    render(<Deviation value={-5} />);
    expect(screen.getByLabelText("-5")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("renders a positive value", () => {
    render(<Deviation value={5} />);
    expect(screen.getByLabelText("5")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("renders a unit", () => {
    render(<Deviation value={-5} unit="eur" />);
    expect(screen.getByLabelText("-5 eur")).toBeInTheDocument();
    expect(screen.getByText("5 eur")).toBeInTheDocument();
  });

  test("renders a percentage", () => {
    render(<Deviation value={-5} percentage={-12} />);
    expect(screen.getByLabelText("-5 (-12%)")).toBeInTheDocument();
    expect(screen.getByText("5 / 12%")).toBeInTheDocument();
  });

  test("renders a unit with percentage", () => {
    render(<Deviation value={-5} unit="eur" percentage={-12} />);
    expect(screen.getByLabelText("-5 eur (-12%)")).toBeInTheDocument();
    expect(screen.getByText("5 eur / 12%")).toBeInTheDocument();
  });

  test("renders a unique icon per absolute deviation", () => {
    const { container: positive } = render(<Deviation value={5} />);
    const { container: negative } = render(<Deviation value={-5} />);
    const { container: zero } = render(<Deviation value={0} />);

    const svgContents = [
      positive.querySelector("svg")?.innerHTML,
      negative.querySelector("svg")?.innerHTML,
      zero.querySelector("svg")?.innerHTML,
    ];

    expect(
      svgContents.every((value1, index1) =>
        svgContents.every(
          (value2, index2) => index1 === index2 || value1 !== value2
        )
      )
    ).toBeTruthy();
  });
});
