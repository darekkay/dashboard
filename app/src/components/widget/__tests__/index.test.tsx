import React from "react";

import { render, screen } from "common/testing";
import { State as ErrorProps } from "common/hoc/withErrorHandling";
import { WidgetProps } from "widgets";

import { Widget } from "../index";

describe("<Widget />", () => {
  const renderWidget = (props: Partial<WidgetProps & ErrorProps>) =>
    render(
      <Widget
        id="mock-widget"
        type="text"
        options={{}}
        setOptions={() => null}
        data={{}}
        setData={() => null}
        meta={{}}
        triggerUpdate={() => {}}
        removeWidgetFromLayout={() => {}}
        hasError={false}
        {...props}
      />
    );

  test("renders without errors", () => {
    renderWidget({});
    expect(screen.queryByText("common.error")).not.toBeInTheDocument();
  });

  test("renders errors", () => {
    renderWidget({ hasError: true });
    expect(screen.getByText("common.error")).toBeInTheDocument();
  });
});
