import {
  Express,
  Request,
  Response,
  NextFunction,
} from "express-serve-static-core";

import axios from "../axios";
import config from "../config";
import { ttlForWidgetType } from "../utils";

const isRequestValid = (request: Request) => !!request.query.query;

/* Based on: https://github.com/Tenpi/youtube.ts/blob/master/entities/Util.ts */
const resolveQuery = async (query: string) => {
  let id;
  let username;

  /* eslint-disable prefer-named-capture-group */
  if (query.includes("youtube.com") || query.includes("youtu.be")) {
    if (query.includes("channel")) {
      id = /(?<=channel\/)(.*?)(?=(?:\?|\/|$))/.exec(query)?.[0];
    } else if (query.includes("c/")) {
      username = /(?<=c\/)(.*?)(?=(?:\?|\/|$))/.exec(query)?.[0];
    } else if (query.includes("user/")) {
      username = /(?<=user\/)(.*?)(?=(?:\?|\/|$))/.exec(query)?.[0];
    }
  } else if (query.startsWith("UC")) {
    id = query;
  } else {
    username = query;
  }

  return { id, forUsername: username };
};

const routes = (app: Express) =>
  /* get channel statistics */
  app.get(
    "/youtube/stats",
    async (request: Request, response: Response, next: NextFunction) => {
      if (!isRequestValid(request)) {
        return response.status(400).end();
      }

      try {
        const params = await resolveQuery(request.query.query);

        const axiosResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels`,
          {
            params: {
              part: "brandingSettings,statistics",
              key: config.api.youtube,
              ...params,
            },
            ttl: ttlForWidgetType("youtube-stats"),
          }
        );

        const { data } = axiosResponse;

        if (!data.items || !data.items.length) {
          // no results found
          return response.status(404).end();
        }

        const { brandingSettings, statistics } = data.items[0];

        return response.json({
          viewCount: parseInt(statistics.viewCount, 10),
          subscriberCount: parseInt(statistics.subscriberCount, 10),
          videoCount: parseInt(statistics.videoCount, 10),
          channelTitle: brandingSettings.channel.title,
        });
      } catch (error) {
        return next(error);
      }
    }
  );

export default routes;
