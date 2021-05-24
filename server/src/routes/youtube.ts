import { Controller, Get, Query, Res, Route, TsoaResponse } from "tsoa";

import axios from "../axios";
import config from "../config";
import { ttlForWidgetType } from "../utils";

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

interface YoutubeStats {
  channelTitle?: string;
  subscriberCount?: number;
  viewCount?: number;
  videoCount?: number;
}

@Route("/youtube")
export class YoutubeController extends Controller {
  /**
   * Returns stats for a YouTube account.
   *
   * @param query Youtube id or username
   * @param notFound Not found
   */
  @Get("/stats")
  public async getYoutubeStats(
    @Query() query: string,
    @Res() notFound: TsoaResponse<404, {}>
  ): Promise<YoutubeStats> {
    const params = await resolveQuery(query);

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
      return notFound(404, {});
    }

    const { brandingSettings, statistics } = data.items[0];

    return {
      viewCount: parseInt(statistics.viewCount, 10),
      subscriberCount: parseInt(statistics.subscriberCount, 10),
      videoCount: parseInt(statistics.videoCount, 10),
      channelTitle: brandingSettings.channel.title,
    };
  }
}
