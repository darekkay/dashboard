import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import FileUpload from "../index";

describe("<FileUpload />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<FileUpload label="Drag and drop files" />);
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
