import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Widget from "./Widget";

describe("<Widget />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Widget height={1} width={1} rowHeightInPx={125} />);
  });

  it("renders without error", () => {
    expect(wrapper.find(".widget")).toHaveLength(1);
  });
});
