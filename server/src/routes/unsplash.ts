import {
  Express,
  Request,
  Response,
  NextFunction,
} from "express-serve-static-core";

import axios from "../axios";
import config from "../config";

const routes = (app: Express) =>
  /* get random image from unsplash */
  app.get(
    "/unsplash/random",
    async (_request: Request, response: Response, next: NextFunction) => {
      try {
        const axiosResponse = await axios.get(
          `https://api.unsplash.com/photos/random`,
          {
            headers: {
              Authorization: `Client-ID ${config.api.unsplash}`,
            },
          }
        );

        const { data } = axiosResponse;

        if (data.errors) {
          // other errors than 404 should be handled by default axios flow
          return response.status(404).end();
        }

        return response.json({
          raw: data.urls.raw,
          full: data.urls.full,
          regular: data.urls.regular,
          small: data.urls.small,
          thumb: data.urls.thumb,
        });
      } catch (error) {
        return next(error);
      }
    }
  );

export default routes;
