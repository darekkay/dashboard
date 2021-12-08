import React from "react";

import { render, screen } from "common/testing";

import WidgetStatusDisplay from "../index";

describe("<WidgetStatusDisplay    />", () => {
  test("renders an empty element when idle", () => {
    const { container } = render(
      <WidgetStatusDisplay
        meta={{ updateStatus: "idle" }}
        isDataEmpty={false}
      />
    );
    expect(container).toBeEmptyDOMElement();
  });

  test("renders a loading indicator when pending", () => {
    render(
      <WidgetStatusDisplay
        meta={{ updateStatus: "pending" }}
        isDataEmpty={false}
      />
    );
    expect(
      screen.getByRole("progressbar", { name: /common.loading/i })
    ).toBeInTheDocument();
  });

  test("renders a connection error when error", () => {
    render(
      <WidgetStatusDisplay
        meta={{ updateStatus: "error" }}
        isDataEmpty={false}
      />
    );
    expect(screen.getByText("error.connectionError")).toBeInTheDocument();
  });

  test("renders an empty element when success", () => {
    const { container } = render(
      <WidgetStatusDisplay
        meta={{ updateStatus: "success" }}
        isDataEmpty={false}
      />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
