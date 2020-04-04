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
});
