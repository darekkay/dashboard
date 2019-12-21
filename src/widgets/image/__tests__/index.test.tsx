import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

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
});
