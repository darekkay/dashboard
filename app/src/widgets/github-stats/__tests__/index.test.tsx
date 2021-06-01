import React from "react";

import { render, screen } from "common/testing";
import { widgetProps } from "common/utils/mock";

import GithubStats from "../index";

describe("<GithubStats />", () => {
  test("renders without errors", () => {
    render(
      <GithubStats
        {...widgetProps}
        id="github-stats-mock-id"
        query="darekkay"
        stars={1}
        followers={2}
        subscribers={3}
        forks={4}
        open_issues={0}
      />
    );

    expect(
      screen.queryByText("widget.common.unconfigured")
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("widget-error")).not.toBeInTheDocument();
  });

  test("doesn't render if the query is missing", () => {
    render(<GithubStats {...widgetProps} query="" id="github-stats-mock-id" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  test("renders an error if the server returns 404", () => {
    render(
      <GithubStats
        {...widgetProps}
        id="github-stats-mock-id"
        query="darekkay"
        meta={{ ...widgetProps.meta, errorCode: 404 }}
      />
    );
    expect(screen.getByTestId("widget-error")).toBeInTheDocument();
  });

  test("triggers an update", () => {
    const triggerUpdate = jest.fn();
    render(
      <GithubStats
        {...widgetProps}
        id="github-stats-mock-id"
        query="darekkay"
        triggerUpdate={triggerUpdate}
      />
    );
    expect(triggerUpdate).toHaveBeenCalledTimes(1);
    expect(triggerUpdate).toHaveBeenCalledWith({
      id: "github-stats-mock-id",
      params: {
        query: "darekkay",
      },
    });
  });
});
