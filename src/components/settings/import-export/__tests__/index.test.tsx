import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { ImportExport } from "../index";

describe("<ImportExport />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ImportExport
        state={{ config: { theme: "", language: "" }, widgets: {} }}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
