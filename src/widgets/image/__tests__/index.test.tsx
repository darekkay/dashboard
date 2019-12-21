import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import _ from "lodash";

import Image from "../index";

describe("<Image />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Image
        id="image-mock-id"
        url="https://example.com/example.jpg"
        meta={{}}
        setData={_.noop}
        setOptions={_.noop}
        triggerUpdate={_.noop}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });
});
