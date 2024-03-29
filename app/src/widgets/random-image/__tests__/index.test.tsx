import React from "react";

import { render, screen } from "common/testing";
import { widgetContentProps, widgetStatusDisplay } from "common/utils/mock";

import RandomImage from "../index";

describe("<RandomImage />", () => {
  test("renders without errors", () => {
    render(
      <RandomImage
        {...widgetContentProps}
        imageUrl="https://images.unsplash.com/photo-1600056926106-78f915b94f63?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mzg3NX0"
        authorName="Josh Withers"
        authorUrl="https://ahoyjosh.com"
        altText="penguins on white sand during daytime"
      />
    );
    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("renders a widgetStatusDisplay when available", () => {
    render(
      <RandomImage
        {...widgetContentProps}
        widgetStatusDisplay={widgetStatusDisplay}
      />
    );
    expect(screen.getByTestId("widget-status-display")).toBeInTheDocument();
  });
});
