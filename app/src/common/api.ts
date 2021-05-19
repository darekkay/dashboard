import axios from "axios";

import { API_BASE_URL } from "common/environment";

// NICE: use some library to automate and type the API declaration
export const PASSTHROUGH = "/passthrough";

export const CRYPTOCURRENCIES_PRICE = "/cryptocurrencies/price";

export const GITHUB_STATS = "/github/stats";

export const TWITTER_STATS = "/twitter/user";

export const UNSPLASH_RANDOM_PHOTO = "/unsplash/random";

export const YOUTUBE_STATS = "/youtube/stats";

export default axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
