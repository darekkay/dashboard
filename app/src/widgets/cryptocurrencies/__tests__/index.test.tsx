import React from "react";

import { render, screen } from "common/testing";
import { widgetProps, widgetStatusDisplay } from "common/utils/mock";

import Cryptocurrencies from "../index";

describe("<Cryptocurrencies />", () => {
  test("renders without errors", () => {
    render(
      <Cryptocurrencies
        {...widgetProps}
        crypto="ethereum"
        fiat="pln"
        currentPrice={6714}
        last24h={{
          change: 123,
          changePercentage: 1.51,
        }}
      />
    );
    expect(screen.getByTestId("widget-cryptocurrencies")).toHaveTextContent(
      "numberpln"
    );
  });

  test("renders the currency icon", () => {
    render(
      <Cryptocurrencies
        {...widgetProps}
        crypto="ethereum"
        fiat="pln"
        imageUrl="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
      />
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", "ethereum");
  });

  test("triggers an update", () => {
    const triggerUpdate = jest.fn();
    render(
      <Cryptocurrencies
        {...widgetProps}
        crypto="ethereum"
        fiat="pln"
        triggerUpdate={triggerUpdate}
      />
    );
    expect(triggerUpdate).toHaveBeenCalledTimes(1);
    expect(triggerUpdate).toHaveBeenCalledWith({
      id: "widget-mock-id",
      params: {
        crypto: "ethereum",
        fiat: "pln",
      },
    });
  });

  test("renders a widgetStatusDisplay when available", () => {
    render(
      <Cryptocurrencies
        {...widgetProps}
        crypto="ethereum"
        fiat="pln"
        widgetStatusDisplay={widgetStatusDisplay}
      />
    );
    expect(screen.getByTestId("widget-status-display")).toBeInTheDocument();
  });
});
