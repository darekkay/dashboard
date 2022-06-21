import React from "react";

import { render, screen } from "common/testing";
import log from "common/log";

import withErrorHandling, { State as ErrorProps } from "../withErrorHandling";

const ComponentWithoutErrors = (props: {} & ErrorProps) => (
  <div>{props.hasRenderError ? <span>Error</span> : <span>Success</span>}</div>
);
const NoErrors = withErrorHandling(ComponentWithoutErrors);

const ComponentWithErrors = (props: {} & ErrorProps) => {
  if (!props.hasRenderError) throw new Error("💣️");
  else return <span>Error</span>;
};
const Errors = withErrorHandling(ComponentWithErrors);

describe("withErrorHandling", () => {
  test("handles no errors", () => {
    render(<NoErrors />);
    expect(screen.getByText(/success/i)).toBeInTheDocument();
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
  });

  test("handles errors", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const logErrorSpy = jest.spyOn(log, "error").mockImplementation(() => {});

    render(<Errors />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
    expect(logErrorSpy).toHaveBeenCalledTimes(1);
    expect(logErrorSpy).toHaveBeenCalledWith("💣️");

    jest.clearAllMocks();
  });
});
