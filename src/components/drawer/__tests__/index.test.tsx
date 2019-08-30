import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Button from "components/button";
import { availableWidgetNames } from "widgets";

import Drawer from "../index";

describe("<Drawer />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Drawer addWidgetToLayout={() => null} />);
  });

  it("renders a button per available ", () => {
    expect(wrapper.find(Button)).toHaveLength(availableWidgetNames.length);
  });
});
