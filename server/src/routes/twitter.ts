import { Controller, Get, Query, Res, Route, TsoaResponse } from "tsoa";

import axios from "../axios";
import config from "../config";
import { ttlForWidgetType } from "../utils";

export const normalizeUsername = (username: string) => {
  let result = username.trim();
  if (result.startsWith("@")) result = result.substring(1);
  return result;
};

interface TwitterUser {
  name?: string;
  followers?: number;
  following?: number;
  tweets?: number;
  listed?: number;
}

@Route("/twitter")
export class TwitterController extends Controller {
  /**
   * Returns stats for a Twitter user.
   *
   * @param username Twitter username
   * @param notFound Not found
   */
  @Get("/user")
  public async getTwitterStats(
    @Query() username: string,
    @Res() notFound: TsoaResponse<404, {}>
  ): Promise<TwitterUser> {
    const normalizedUsername = normalizeUsername(username);
    const axiosResponse = await axios.get(
      `https://api.twitter.com/2/users/by/username/${normalizedUsername}`,
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
      return notFound(404, {});
    }

    return {
      name: data.data.name,
      followers: data.data.public_metrics.followers_count,
      following: data.data.public_metrics.following_count,
      tweets: data.data.public_metrics.tweet_count,
      listed: data.data.public_metrics.listed_count,
    };
  }
}
