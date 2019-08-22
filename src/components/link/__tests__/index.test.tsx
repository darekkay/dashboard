import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Link from "../index";

describe("<Link />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Link href="#">Label</Link>);
  });

  it("renders a single a element", () => {
    expect(wrapper.find("a")).toHaveLength(1);
  });

  it("renders target and rel for external links", () => {
    expect(wrapper.find("a[target][rel]")).toHaveLength(1);
    wrapper = shallow(
      <Link href="#" external={false}>
        Label
      </Link>
    );
    expect(wrapper.find("a[target][rel]")).toHaveLength(0);
  });
});
