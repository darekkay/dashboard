import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps, widgetStatusDisplay } from "common/utils/mock";

import YoutubeStats from "../index";

describe("<YoutubeStats />", () => {
  test("renders without errors", () => {
    render(
      <YoutubeStats
        {...widgetProps}
        subscriberCount={1642}
        viewCount={2047174}
        query="https://www.youtube.com/c/darekkay"
      />
    );

    expect(
      screen.queryByText("widget.common.unconfigured")
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("widget-error")).not.toBeInTheDocument();
  });

  test("doesn't render if the query is missing", () => {
    render(<YoutubeStats {...widgetProps} query="" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  test("renders an error if the server returns 404", () => {
    render(
      <YoutubeStats
        {...widgetProps}
        query="https://www.youtube.com/c/darekkay"
        meta={{ ...widgetProps.meta, errorCode: 404 }}
      />
    );
    expect(screen.getByTestId("widget-error")).toBeInTheDocument();
  });

  test("triggers an update", () => {
    const triggerUpdate = jest.fn();
    render(
      <YoutubeStats
        {...widgetProps}
        id="widget-mock-id"
        query="https://www.youtube.com/c/darekkay"
        triggerUpdate={triggerUpdate}
      />
    );
    expect(triggerUpdate).toHaveBeenCalledTimes(1);
    expect(triggerUpdate).toHaveBeenCalledWith({
      id: "widget-mock-id",
      params: {
        query: "https://www.youtube.com/c/darekkay",
      },
    });
  });

  test("renders a widgetStatusDisplay when available", () => {
    render(
      <YoutubeStats
        {...widgetProps}
        query="https://www.youtube.com/c/darekkay"
        widgetStatusDisplay={widgetStatusDisplay}
      />
    );
    expect(screen.getByTestId("widget-status-display")).toBeInTheDocument();
  });
});
