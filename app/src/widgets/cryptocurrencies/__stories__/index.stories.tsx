import React from "react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

export default {
  title: "Widgets/Cryptocurrencies",
};

export const Variants = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="cryptocurrencies-01"
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
      meta={initialMeta("cryptocurrencies")}
    />
  );
};
