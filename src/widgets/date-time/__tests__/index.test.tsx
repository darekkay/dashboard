import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { DateTime } from "../index";

describe("<DateTime />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <DateTime
        id="date-time-mock-id"
        setData={() => null}
        setOptions={() => null}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("time")).toHaveLength(1);
  });
});
