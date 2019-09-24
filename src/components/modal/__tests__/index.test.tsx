import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Modal from "../index";

describe("<Modal />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal isOpen={true} closeModal={() => null}>
        Content
      </Modal>
    );
  });

  it("renders a headline when provided", () => {
    expect(wrapper.find("h2").length).toBe(0);
    wrapper.setProps({ headline: "Modal headline" });
    expect(wrapper.find("h2").length).toBe(1);
  });
});
