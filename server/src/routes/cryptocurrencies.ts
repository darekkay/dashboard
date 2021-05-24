import _ from "lodash";
import { Controller, Get, Query, Route } from "tsoa";

import axios from "../axios";
import { ttlForWidgetType } from "../utils";

interface CryptocurrencyPrice {
  currentPrice: number;
  last24h: {
    change: number;
    changePercentage: number;
  };
  imageUrl?: string;
}

@Route("/cryptocurrencies")
export class CryptocurrenciesController extends Controller {
  /**
   * Returns the current price for a cryptocurrency.
   *
   * @param crypto cryptocurrency code, e.g. "bitcoin"
   * @param fiat fiat currency code, e.g. "eur"
   */
  @Get("/price")
  public async getCryptocurrencyPrice(
    @Query() crypto: string,
    @Query() fiat: string
  ): Promise<CryptocurrencyPrice> {
    const axiosResponse = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: fiat,
          ids: crypto,
        },
        ttl: ttlForWidgetType("cryptocurrencies"),
      }
    );

    const values = axiosResponse.data[0];
    return {
      currentPrice: values.current_price,
      last24h: {
        change: _.round(values.price_change_24h, 2),
        changePercentage: _.round(values.price_change_percentage_24h, 2),
      },
      imageUrl:
        typeof values.image === "string"
          ? (values.image as string).replace("/large/", "/small/")
          : undefined,
    };
  }
}
