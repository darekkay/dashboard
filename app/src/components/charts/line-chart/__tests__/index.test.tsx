import React from "react";

import { render, screen } from "common/testing";

import LineChart from "../index";

export const data = [
  {
    visitors: 376,
    time: "2020-04-19",
  },
  {
    visitors: 276,
    time: "2020-04-20",
  },
  {
    visitors: 640,
    time: "2020-04-21",
  },
  {
    visitors: 650,
    time: "2020-04-22",
  },
  {
    visitors: 663,
    time: "2020-04-23",
  },
  {
    visitors: 586,
    time: "2020-04-24",
  },
  {
    visitors: 484,
    time: "2020-04-25",
  },
  {
    visitors: 1483,
    time: "2020-04-26",
  },
];

describe("<LineChart />", () => {
  test("handles default data keys x and y", () => {
    render(
      <div style={{ height: "300px", width: "300px" }}>
        <LineChart data={[{ x: 1, y: 2 }]} />
      </div>
    );

    expect(screen.getByTestId("chart")).toBeInTheDocument();
  });

  test("handles custom data keys", () => {
    render(
      <div style={{ height: "300px", width: "300px" }}>
        <LineChart data={data} dataKeyX="time" dataKeyY="visitors" />
      </div>
    );

    expect(screen.getByTestId("chart")).toBeInTheDocument();
  });
});
