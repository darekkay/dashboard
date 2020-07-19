import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="cryptocurrencies-mock-id"
      type="cryptocurrencies"
      data={{
        crypto: "bitcoin",
        fiat: "eur",
        imageUrl:
          "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
        currentPrice: 6714,
        last24h: {
          change: 123,
          changePercentage: 1.51,
        },
      }}
    />
  );
};

storiesOf("Widgets.Cryptocurrencies", module).add("Variants", () => <Story />);
