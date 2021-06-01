import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import Chart from "../index";

export const data = [
  {
    x: "2020-04-19",
    y: 376,
  },
];

const commonProps = {
  ...widgetProps,
  url: "",
  dataPath: "",
  dataKeyX: "",
  dataKeyY: "",
};

describe("<Chart />", () => {
  test("renders without errors", () => {
    render(
      <Chart
        {...commonProps}
        id="chart-mock-id"
        url="https://example.com"
        // @ts-expect-error
        data={data}
        dataPath="data"
      />
    );
    expect(
      screen.queryByText("widget.common.unconfigured")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("widget.chart.error.noArrayData")
    ).not.toBeInTheDocument();
  });

  test("doesn't render if the url is missing", () => {
    render(<Chart {...commonProps} id="chart-mock-id" url="" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  test("doesn't render if the dataPath is missing", () => {
    render(
      <Chart
        {...commonProps}
        id="chart-mock-id"
        url="https://example.com"
        dataPath=""
      />
    );
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  test("renders an error if the configured data is not an array", () => {
    render(
      <Chart
        {...commonProps}
        id="chart-mock-id"
        url="https://example.com"
        // @ts-expect-error
        data={{
          data: true,
        }}
        dataPath="data"
      />
    );
    expect(
      screen.getByText("widget.chart.error.noArrayData")
    ).toBeInTheDocument();
  });
});
