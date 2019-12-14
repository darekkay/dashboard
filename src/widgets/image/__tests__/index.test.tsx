import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Image from "../index";

describe("<Image />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Image
        id="image-mock-id"
        setData={() => null}
        setOptions={() => null}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });
});
