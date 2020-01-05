import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { widgetProps } from "common/utils/mock";

import Website from "../index";

describe("<Website />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Website
        {...widgetProps}
        id="website-mock-id"
        url="https://example.com"
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("iframe")).toHaveLength(1);
  });
});
