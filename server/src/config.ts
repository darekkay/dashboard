import logger from "@darekkay/logger";

const config = {
  port: process.env.PORT ?? 3401,
  api: {},
};

// output an error if any required API key is missing
Object.entries(config.api).forEach(([key, value]) => {
  if (value === undefined) {
    logger.error(`Missing API key for [${key}]`);
  }
});

export default config;
