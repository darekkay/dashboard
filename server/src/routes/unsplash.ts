import { Controller, Get, Route } from "tsoa";

import axios from "../axios";
import config from "../config";
import { ttlForWidgetType } from "../utils";

interface UnsplashImage {
  imageUrl?: string;
  authorName?: string;
  authorUrl?: string;
  altText?: string;
}

@Route("/unsplash")
export class UnsplashController extends Controller {
  /**
   * Returns a random Unsplash image.
   */
  @Get("/random")
  public async getRandomImage(): Promise<UnsplashImage> {
    const axiosResponse = await axios.get(
      `https://api.unsplash.com/photos/random`,
      {
        headers: {
          Authorization: `Client-ID ${config.api.unsplash}`,
        },
        ttl: ttlForWidgetType("random-image"), // use a short TTL to prevent request flooding
      }
    );

    const { data } = axiosResponse;

    return {
      imageUrl: data.urls.regular,
      authorName: data.user.name,
      authorUrl: data.user.links.html,
      altText: data.alt_description,
    };
  }
}
