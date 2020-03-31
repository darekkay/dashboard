import axios from "axios";
import _ from "lodash";
import {
  Express,
  Request,
  Response,
  NextFunction
} from "express-serve-static-core";

const routes = (app: Express) =>
  /* Get the current price for a cryptocurrency */
  app.get(
    "/cryptocurrencies/price",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { crypto, fiat } = req.query;
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: fiat,
              ids: crypto
            }
          }
        );

        // TODO: cache results (RAM or DB)
        const values = response.data[0];
        res.json({
          currentPrice: values.current_price,
          last24h: {
            change: _.round(values.price_change_24h, 2),
            changePercentage: _.round(values.price_change_percentage_24h, 2)
          }
        });
      } catch (error) {
        next(error);
      }
    }
  );

export default routes;
