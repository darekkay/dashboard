import dotenv from "dotenv";

import logger from "@darekkay/logger";

const dotenvConfigOutput = dotenv.config();
if (dotenvConfigOutput.error) {
  logger.error(dotenvConfigOutput.error);
}

const config = {
  port: process.env.PORT ?? 3401,
  api: {
    openWeatherMap: process.env.API_OPEN_WEATHER_MAP,
  },
};

// output an error if any required API key is missing
Object.entries(config.api).forEach(([key, value]) => {
  if (value === undefined) {
    logger.error(`Missing API key for [${key}]`);
  }
});

export default config;
