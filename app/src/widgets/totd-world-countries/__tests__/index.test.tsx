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
        countryCode="DE"
        tld=".de"
        flag="null"
      />
    );
    expect(
      screen.getByRole("TODO", { name: /TODO text/i })
    ).toBeInTheDocument();
  });
});
