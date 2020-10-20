import {
  Express,
  Request,
  Response,
  NextFunction,
} from "express-serve-static-core";

import config from "../config";
import Youtube from "youtube.ts";

const isRequestValid = (request: Request) => !!request.query.url;

const routes = (app: Express) =>
  /* get channel statistics */
  app.get(
    "/youtube",
    async (request: Request, response: Response, next: NextFunction) => {
      if (!isRequestValid(request)) {
        return response.status(400).end();
      }

      try {
        const channel = request.query?.url;
        const youtube = new Youtube(`${config.api.youtube}`);
        const youtubeResponse = await youtube.channels.get(channel);
        const { statistics } = youtubeResponse;
        const { brandingSettings } = youtubeResponse;
        const viewCount = parseInt(statistics.viewCount, 10);
        const subscriberCount = parseInt(statistics.subscriberCount, 10);
        const channelTitle = brandingSettings.channel.title;

        return response.json({
          viewCount,
          subscriberCount,
          channelTitle,
        });
      } catch (error) {
        return next(error);
      }
    }
  );

export default routes;
