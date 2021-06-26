import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps, widgetStatusDisplay } from "common/utils/mock";

import Weather from "../index";

const commonProps = {
  ...widgetProps,
  unit: "metric" as const,
  current: {
    temperature: 24,
    condition: {
      description: "clear sky",
      icon: "01d" as const,
    },
  },
  forecast: [
    {
      date: 1598180400,
      condition: {
        description: "overcast clouds",
        icon: "04d" as const,
      },
      temperatureMin: 18,
      temperatureMax: 30,
    },
  ],
};

describe("<Weather />", () => {
  test("renders without errors", () => {
    render(<Weather {...commonProps} lat="48.210552" lon="16.376495" />);

    expect(screen.getByText("24°")).toBeInTheDocument();
    expect(screen.getByLabelText("clear sky")).toBeInTheDocument();
  });

  test("doesn't render if lat or lon are missing", () => {
    render(<Weather {...commonProps} lat="" lon="" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  // TODO: file generators
  // TODO: copy test into other widgets
  test("renders a widgetStatusDisplay when available", () => {
    render(
      <Weather
        {...commonProps}
        lat="48.210552"
        lon="16.376495"
        widgetStatusDisplay={widgetStatusDisplay}
      />
    );
    expect(screen.getByTestId("widget-status-display")).toBeInTheDocument();
  });
});
