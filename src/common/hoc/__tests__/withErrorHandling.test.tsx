import React from "react";
import { mount } from "enzyme";

import log from "common/log";

import withErrorHandling, { State as ErrorProps } from "../withErrorHandling";

const Component = (props: {} & ErrorProps) => (
  <div className={props.hasError ? "error" : ""}>Success</div>
);

const CatchErrors = withErrorHandling(Component);

describe("withErrorHandling", () => {
  it("handles errors", () => {
    const wrapper = mount(<CatchErrors />);
    const component = wrapper.find(Component);
    expect(wrapper.find(".error").length).toBe(0);
    component.simulateError(new Error("Dummy error"));
    expect(wrapper.find(".error").length).toBe(1);
  });

  /** As "istanbul ignore" doesn't work either, let's make sure the coverage is fulfilled */
  it("fulfills the code coverage", () => {
    const consoleHandle = log.error;
    log.error = jest.fn();
    const spyConsoleError = jest.spyOn(log, "error");

    const wrapper = mount(<CatchErrors />);
    const component = wrapper.find(Component);
    const errorMessage = "Dummy error";

    component.simulateError(new Error(errorMessage));
    expect(CatchErrors.getDerivedStateFromError().hasError).toBe(true);
    expect(spyConsoleError).toHaveBeenCalledWith(errorMessage);

    log.error = consoleHandle;
  });
});
