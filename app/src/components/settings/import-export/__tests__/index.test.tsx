import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { stateProps } from "common/utils/mock";
import { ImportExport } from "../index";

describe("<ImportExport />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ImportExport state={stateProps} importState={() => null} />
    );
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
