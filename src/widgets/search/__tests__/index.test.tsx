import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Input from "components/input";
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
});
