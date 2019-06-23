import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Input from "../index";

describe("<Input />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Input value="text" setValue={() => null} />);
  });

  it("renders without error", () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it("handles Enter key up event", () => {
    const handler = jest.fn();
    wrapper.setProps({ onEnter: handler });
    const input = wrapper.find("input");
    expect(handler).not.toHaveBeenCalled();
    input.simulate("keyup", { which: 13, key: "Enter", target: input });
    expect(handler).toHaveBeenCalled();
  });

  it("handles Escape key up event", () => {
    const handler = jest.fn();
    wrapper.setProps({ onEscape: handler });
    const input = wrapper.find("input");
    expect(handler).not.toHaveBeenCalled();
    input.simulate("keyup", { which: 27, key: "Escape", target: input });
    expect(handler).toHaveBeenCalled();
  });
});
