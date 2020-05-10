import logger from "loglevel";

const logLevel = {
  development: logger.levels.TRACE,
  production: logger.levels.INFO,
  test: logger.levels.ERROR
};

logger.setLevel(logLevel[process.env.NODE_ENV]);

/* Custom logger facade */
const log = {
  trace: logger.trace,
  debug: logger.debug,
  info: logger.info,
  warn: logger.warn,
  error: logger.error
};

export default log;
