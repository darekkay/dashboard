import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Input from "components/forms/input";
import WidgetUnconfigured from "components/widget-unconfigured";
import { widgetProps } from "common/utils/mock";

import Search from "../index";

describe("<Search />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Search
        {...widgetProps}
        id="search-mock-id"
        name="Search"
        pattern="https://example.com?s=%s"
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(Input)).toHaveLength(1);
  });

  it("doesn't render if the pattern is missing", () => {
    wrapper.setProps({ pattern: undefined });
    expect(wrapper.find(WidgetUnconfigured)).toHaveLength(1);
  });
});
