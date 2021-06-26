import dotenv from "dotenv";
import logger from "@darekkay/logger";

const envFile = process.env.NODE_ENV === "test" ? `.env.test` : ".env";
const dotenvConfigOutput = dotenv.config({ path: envFile });
if (dotenvConfigOutput.error) {
  logger.warn(
    "File '.env' not found in the 'server' module. This file is used to store API keys for 3rd-party services. You can ignore this warning, but affected widgets will not work properly."
  );
}

const config = {
  port: process.env.PORT ?? 3401,
  saveAxiosResponses: process.env.SAVE_AXIOS_RESPONSES === "true",
  api: {
    openWeatherMap: process.env.API_OPEN_WEATHER_MAP,
    twitter: process.env.API_TWITTER_BEARER,
    unsplash: process.env.API_UNSPLASH,
    youtube: process.env.API_YOUTUBE,
  },
};

// log a warning if any required API key is missing
Object.entries(config.api).forEach(([key, value]) => {
  if (value === undefined) {
    logger.warn(`Missing API key for [${key}].`);
  }
});

export default config;
