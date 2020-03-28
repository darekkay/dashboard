import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import WidgetUnconfigured from "components/widget-unconfigured";
import { widgetProps } from "common/utils/mock";

import Image from "../index";

describe("<Image />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Image
        {...widgetProps}
        id="image-mock-id"
        url="https://example.com/example.jpg"
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("doesn't render if the url is missing", () => {
    wrapper.setProps({ url: undefined });
    expect(wrapper.find(WidgetUnconfigured)).toHaveLength(1);
  });
});
