import React from "react";
import _ from "lodash";

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
        triggerUpdate={_.noop}
        removeWidgetFromLayout={_.noop}
        hasError={false}
        {...props}
      />
    );

  test("renders without errors", () => {
    renderWidget({});
    expect(screen.queryByText("common.error")).toBeNull();
  });

  test("renders errors", () => {
    renderWidget({ hasError: true });
    expect(screen.getByText("common.error")).toBeInTheDocument();
  });
});
