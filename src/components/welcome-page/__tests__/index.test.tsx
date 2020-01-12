import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import _ from "lodash";

import WelcomePage from "../index";

describe("<WelcomePage />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WelcomePage importWidgets={_.noop} saveLayout={_.noop} />
    );
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
