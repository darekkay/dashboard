import React from "react";
import { shallow, mount, ShallowWrapper } from "enzyme";

import { widgetProps } from "common/utils/mock";
import TextArea from "components/forms/text-area";

import Text from "../index";

describe("<Text />", () => {
  let wrapper: ShallowWrapper;

  const id = "text-mock-id";
  const content = "hello world";
  const setDataSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Text {...widgetProps} id={id} content={content} setData={setDataSpy} />
    );
  });

  it("renders a fixed text", () => {
    expect(wrapper.find(TextArea).props().value).toEqual(content);
  });

  it("updates the content on change", () => {
    const mountWrapper = mount(
      <Text {...widgetProps} id={id} content={content} setData={setDataSpy} />
    );
    const newContent = "new";
    mountWrapper
      .find("textarea")
      .simulate("change", { target: { value: newContent } });
    expect(setDataSpy).toHaveBeenCalledWith({
      id,
      values: { content: newContent }
    });
  });
});
