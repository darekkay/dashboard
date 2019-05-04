import React from "react";
import { mount } from "enzyme";

import withErrorHandling, { State as ErrorProps } from "../withErrorHandling";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Component = (props: Props & ErrorProps) => (
  <div className={props.hasError ? "error" : ""}>Success</div>
);

const CatchErrors = withErrorHandling(Component);

describe("withErrorHandling", () => {
  test.todo("Implement when enzyme supports getDerivedStateFromError"); // TODO
  /* https://github.com/airbnb/enzyme/pull/2036 */
  xit("handles errors", () => {
    const wrapper = mount(<CatchErrors />);
    const component = wrapper.find(Component);
    expect(component.prop("hasError")).toBe(false);
    component.simulateError(new Error("Dummy error"));
    expect(component.prop("hasError")).toBe(true);
  });

  /** As "istanbul ignore" doesn't work either, let's make sure the coverage is fulfilled */
  it("fulfills the code coverage", () => {
    const consoleHandle = console.error;
    console.error = jest.fn();
    const spyConsoleError = jest.spyOn(console, "error");

    const wrapper = mount(<CatchErrors />);
    const component = wrapper.find(Component);
    const errorMessage = "Dummy error";

    component.simulateError(new Error(errorMessage));
    expect(CatchErrors.getDerivedStateFromError().hasError).toBe(true);
    expect(spyConsoleError).toHaveBeenCalledWith(errorMessage);

    console.error = consoleHandle;
  });
});
