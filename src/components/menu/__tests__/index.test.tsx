import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { MenuItem } from "reakit";
import _ from "lodash";

import Menu from "../index";

describe("<Menu />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu icon="cog" title="title" items={[]} />);
  });

  it("renders an empty menu", () => {
    expect(wrapper.find(MenuItem)).toHaveLength(0);
  });

  it("renders menu items and separators", () => {
    wrapper.setProps({
      items: [
        { text: "Item", icon: "heart", onClick: _.noop() },
        "separator",
        { text: "Item", icon: "heart", onClick: _.noop() }
      ]
    });
    expect(wrapper.find(MenuItem)).toHaveLength(2);
    expect(wrapper.find("hr")).toHaveLength(1);
  });
});
