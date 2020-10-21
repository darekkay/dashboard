import dotenv from "dotenv";

import logger from "@darekkay/logger";

const envFile = process.env.NODE_ENV === "test" ? `.env.test` : ".env";
const dotenvConfigOutput = dotenv.config({ path: envFile });
if (dotenvConfigOutput.error) {
  logger.error(dotenvConfigOutput.error);
}

const config = {
  port: process.env.PORT ?? 3401,
  api: {
    openWeatherMap: process.env.API_OPEN_WEATHER_MAP,
    twitter: process.env.API_TWITTER_BEARER,
    unsplash: process.env.API_UNSPLASH,
    youtube: process.env.API_YOUTUBE,
  },
};

// log an error if any required API key is missing
Object.entries(config.api).forEach(([key, value]) => {
  if (value === undefined) {
    logger.error(`Missing API key for [${key}]`);
  }
});

export default config;
