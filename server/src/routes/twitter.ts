import {
  Express,
  Request,
  Response,
  NextFunction,
} from "express-serve-static-core";

import axios from "../axios";
import config from "../config";
import { ttlForWidgetType } from "../utils";

const isRequestValid = (request: Request) => !!request.query.username;

export const normalizeUsername = (username: string) => {
  let result = username.trim();
  if (result.startsWith("@")) result = result.substring(1);
  return result;
};

const routes = (app: Express) =>
  /* Get the current price for a cryptocurrency */
  app.get(
    "/twitter/user",
    async (request: Request, response: Response, next: NextFunction) => {
      if (!isRequestValid(request)) {
        return response.status(400).end();
      }

      try {
        const username = normalizeUsername(request.query?.username);
        const axiosResponse = await axios.get(
          `https://api.twitter.com/2/users/by/username/${username}`,
          {
            params: {
              "user.fields": "public_metrics",
            },
            headers: {
              Authorization: `Bearer ${config.api.twitter}`,
            },
            ttl: ttlForWidgetType("twitter-stats"),
          }
        );

        const { data } = axiosResponse;
        if (data.errors) {
          // other errors than 404 should be handled by default axios flow
          return response.status(404).end();
        }

        return response.json({
          name: data.data.name,
          followers: data.data.public_metrics.followers_count,
          following: data.data.public_metrics.following_count,
          tweets: data.data.public_metrics.tweet_count,
          listed: data.data.public_metrics.listed_count,
        });
      } catch (error) {
        return next(error);
      }
    }
  );

export default routes;
