import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Button from "components/button";
import { widgetProps } from "common/utils/mock";

import Counter from "../index";

describe("<Counter />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter {...widgetProps} id="counter-mock-id" />);
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it("increments the value", () => {
    const setData = jest.fn();
    wrapper.setProps({ setData, value: 5 });
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(setData).toHaveBeenCalledWith({
      id: "counter-mock-id",
      values: { value: 4 }
    });
  });

  it("decrements the value", () => {
    const setData = jest.fn();
    wrapper.setProps({ setData, value: 5 });
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    expect(setData).toHaveBeenCalledWith({
      id: "counter-mock-id",
      values: { value: 6 }
    });
  });
});
