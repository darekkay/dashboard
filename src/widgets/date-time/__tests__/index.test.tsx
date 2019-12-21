import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { widgetProps } from "common/utils/mock";

import { DateTime } from "../index";

describe("<DateTime />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<DateTime {...widgetProps} id="date-time-mock-id" />);
  });

  it("renders without error", () => {
    expect(wrapper.find("time")).toHaveLength(1);
  });
});
