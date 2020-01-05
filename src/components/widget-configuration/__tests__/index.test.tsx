import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import _ from "lodash";

import Modal from "components/modal";
import widgets from "widgets";

import WidgetConfiguration from "../index";

describe("<WidgetConfiguration />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WidgetConfiguration
        id="image-01"
        type="image"
        closeModal={_.noop}
        configuration={widgets["image"].Configuration}
        isModalOpen
        options={{}}
        setOptions={_.noop}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
