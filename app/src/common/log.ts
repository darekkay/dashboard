import logger, { LogLevelDesc } from "loglevel";

const logLevel: Record<string, LogLevelDesc> = {
  development: logger.levels.TRACE,
  production: logger.levels.INFO,
  test: logger.levels.ERROR,
};

/* istanbul ignore next */
logger.setDefaultLevel(logLevel[process.env.NODE_ENV || "production"]);

/* Custom logger facade */
const log = {
  trace: logger.trace,
  debug: logger.debug,
  info: logger.info,
  warn: logger.warn,
  error: logger.error,
};

export default log;
