import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { widgetProps } from "common/utils/mock";

import Cryptocurrencies from "../index";

describe("<Cryptocurrencies />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Cryptocurrencies
        {...widgetProps}
        id="cryptocurrencies-mock-id"
        crypto="bitcoin"
        fiat="eur"
        currentPrice={6714}
        last24h={{
          change: 123,
          changePercentage: 1.51
        }}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
