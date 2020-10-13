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
            ttl: 3, // use a short TTL to prevent request flooding
          }
        );

        const { data } = axiosResponse;

        return response.json({
          imageUrl: data.urls.regular,
          authorName: data.user.name,
          authorUrl: data.user.links.html,
        });
      } catch (error) {
        return next(error);
      }
    }
  );

export default routes;
