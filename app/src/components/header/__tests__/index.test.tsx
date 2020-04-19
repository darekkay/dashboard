import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Menu from "components/menu";

import Header from "../index";

describe("<Header />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header
        isLayoutEditable={false}
        toggleLayoutEditable={() => null}
        isFullscreen={false}
        toggleFullscreen={() => null}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("header")).toHaveLength(1);
    expect(wrapper.find(Menu)).toHaveLength(1);
  });
});
