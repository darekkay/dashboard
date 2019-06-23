import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Input from "components/input";

import Search from "../index";

describe("<Search />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Search
        id="search-mock-id"
        name="Search"
        pattern="https://example.com?s=%s"
        setDataValue={() => null}
        setOptionValue={() => null}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(Input)).toHaveLength(1);
  });
});
