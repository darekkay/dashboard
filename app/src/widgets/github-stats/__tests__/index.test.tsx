import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { widgetProps } from "common/utils/mock";

import GithubStats from "../index";

describe("<GithubStats />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GithubStats {...widgetProps} id="github-stats-mock-id" />
    );
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
