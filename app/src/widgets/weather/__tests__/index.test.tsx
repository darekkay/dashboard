import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import Weather from "../index";

describe("<Weather />", () => {
  test("renders without errors", () => {
    render(
      <Weather
        {...widgetProps}
        lat="48.210552"
        lon="16.376495"
        unit="metric"
        current={{
          temperature: 24,
          condition: {
            description: "clear sky",
            icon: "01d",
          },
        }}
        forecast={[
          {
            date: 1598180400,
            condition: {
              description: "overcast clouds",
              icon: "04d",
            },
            temperatureMin: 18,
            temperatureMax: 30,
          },
        ]}
      />
    );

    expect(screen.getByText("24°")).toBeInTheDocument();
    expect(screen.getByLabelText("clear sky")).toBeInTheDocument();
  });
});
