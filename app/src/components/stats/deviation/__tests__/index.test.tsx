import React from "react";
import { render } from "@testing-library/react";

import Deviation from "components/stats/deviation/index";

describe("<Deviation />", () => {
  it("renders an absolute value", () => {
    const { queryByText } = render(<Deviation value={-5} />);
    expect(queryByText("-5")).toBeNull();
    expect(queryByText("5")).not.toBeNull();
  });

  it("renders a correct aria label", () => {
    const { queryByLabelText } = render(<Deviation value={-5} />);
    expect(queryByLabelText("-5")).not.toBeNull();
    // TODO: check for the exact value to catch "5 undefined" issues when no unit is provided
  });

  it("renders a unique icon per absolute deviation", () => {
    const { container: positive } = render(<Deviation value={5} />);
    const { container: negative } = render(<Deviation value={-5} />);
    const { container: zero } = render(<Deviation value={0} />);

    const svgContents = [
      positive.querySelector("svg")?.innerHTML,
      negative.querySelector("svg")?.innerHTML,
      zero.querySelector("svg")?.innerHTML
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
