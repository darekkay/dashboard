import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import TwitterStats from "../index";

describe("<TwitterStats />", () => {
  test("renders without errors", () => {
    render(
      <TwitterStats
        {...widgetProps}
        username="darek_kay"
        followers={4962}
        following={191}
        tweets={984289}
        listed={0}
      />
    );
    expect(
      screen.queryByText("widget.common.unconfigured")
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("widget-error")).not.toBeInTheDocument();
  });

  test("doesn't render if the username is missing", () => {
    render(<TwitterStats {...widgetProps} username="" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  test("renders an error if the server returns 404", () => {
    render(
      <TwitterStats
        {...widgetProps}
        username="darek_kay"
        meta={{ ...widgetProps.meta, errorCode: 404 }}
      />
    );
    expect(screen.getByTestId("widget-error")).toBeInTheDocument();
  });

  test("triggers an update", () => {
    const triggerUpdate = jest.fn();
    render(
      <TwitterStats
        {...widgetProps}
        id="widget-mock-id"
        username="darek_kay"
        triggerUpdate={triggerUpdate}
      />
    );
    expect(triggerUpdate).toHaveBeenCalledTimes(1);
    expect(triggerUpdate).toHaveBeenCalledWith({
      id: "widget-mock-id",
      params: {
        username: "darek_kay",
      },
    });
  });
});
