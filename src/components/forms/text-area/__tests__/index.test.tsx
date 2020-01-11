import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import TextArea from "../index";

describe("<TextArea />", () => {
  let wrapper: ShallowWrapper;

  const setValueSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<TextArea setValue={setValueSpy} />);
  });

  it("renders without error", () => {
    expect(wrapper.find("textarea")).toHaveLength(1);
  });

  it("fires an event on change", () => {
    const newContent = "hello world";
    wrapper
      .find("textarea")
      .simulate("change", { target: { value: newContent } });
    expect(setValueSpy).toHaveBeenCalledWith(newContent);
  });
});
