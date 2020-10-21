import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import YoutubeStats from "../index";

describe("<YoutubeStats />", () => {
  test("renders without errors", () => {
    render(
      <YoutubeStats
        {...widgetProps}
        id="youtube-stats-mock-id"
        subscriberCount={1642}
        viewCount={2047174}
        query="https://www.youtube.com/c/darekkay"
      />
    );

    expect(screen.queryByText("widget.common.unconfigured")).toBeNull();
    expect(screen.queryByTestId("widget-error")).toBeNull();
  });

  test("doesn't render if the query is missing", () => {
    render(<YoutubeStats {...widgetProps} id="youtube-stats-mock-id" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  test("renders an error if the server returns 404", () => {
    render(
      <YoutubeStats
        {...widgetProps}
        id="youtube-stats-mock-id"
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
        id="youtube-stats-mock-id"
        query="https://www.youtube.com/c/darekkay"
        triggerUpdate={triggerUpdate}
      />
    );
    expect(triggerUpdate).toHaveBeenCalledTimes(1);
    expect(triggerUpdate).toHaveBeenCalledWith({
      id: "youtube-stats-mock-id",
      params: {
        query: "https://www.youtube.com/c/darekkay",
      },
    });
  });
});
