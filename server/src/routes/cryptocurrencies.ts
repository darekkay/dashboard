import _ from "lodash";
import {
  Express,
  Request,
  Response,
  NextFunction,
} from "express-serve-static-core";

import axios from "../axios";
import { ttlForWidgetType } from "../utils";

const routes = (app: Express) =>
  /* Get the current price for a cryptocurrency */
  app.get(
    "/cryptocurrencies/price",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        const { crypto, fiat } = request.query;
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
        return response.json({
          currentPrice: values.current_price,
          last24h: {
            change: _.round(values.price_change_24h, 2),
            changePercentage: _.round(values.price_change_percentage_24h, 2),
          },
          imageUrl:
            typeof values.image === "string"
              ? (values.image as string).replace("/large/", "/small/")
              : undefined,
        });
      } catch (error) {
        return next(error);
      }
    }
  );

export default routes;
