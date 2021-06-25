import React from "react";

import { render, screen } from "common/testing";
import { State as ErrorProps } from "common/hoc/withErrorHandling";
import { WidgetProps } from "widgets";

import { WidgetContent } from "../index";

describe("<WidgetContent />", () => {
  const renderWidget = (props: Partial<WidgetProps & ErrorProps>) =>
    render(
      <WidgetContent
        id="mock-widget"
        type="text"
        options={{}}
        setOptions={() => null}
        data={{}}
        setData={() => null}
        meta={{}}
        triggerUpdate={() => {}}
        hasRenderError={false}
        {...props}
      />
    );

  test("renders without errors", () => {
    renderWidget({});
    expect(screen.queryByText("error.unknown")).not.toBeInTheDocument();
  });

  test("renders errors", () => {
    renderWidget({ hasRenderError: true });
    expect(screen.getByText("error.unknown")).toBeInTheDocument();
  });
});
