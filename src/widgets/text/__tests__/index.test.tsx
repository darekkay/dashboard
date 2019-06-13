import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Text from "../index";

describe("<Text />", () => {
  let wrapper: ShallowWrapper;

  const id = "mock-id";
  const content = "hello world";
  const setDataValueSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Text id={id} content={content} setDataValue={setDataValueSpy} />
    );
  });

  it("renders a fixed text", () => {
    expect(wrapper.find("textarea").props().value).toEqual(content);
  });

  it("updates the content on change", () => {
    const newContent = "new";
    wrapper
      .find("textarea")
      .simulate("change", { target: { value: newContent } });
    expect(setDataValueSpy).toHaveBeenCalledWith({
      id,
      key: "content",
      value: newContent
    });
  });
});
