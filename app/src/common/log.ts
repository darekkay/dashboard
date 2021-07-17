/* istanbul ignore file */
import logger from "loglevel";

import { IS_TEST } from "common/environment";

const getLogLevel = () => {
  if (IS_TEST) return logger.levels.ERROR;
  if (window.location.href.includes("debug.log")) return logger.levels.TRACE;
  return logger.levels.INFO;
};

logger.setDefaultLevel(getLogLevel());

/* Custom logger facade */
const log = {
  trace: logger.trace,
  debug: logger.debug,
  info: logger.info,
  warn: logger.warn,
  error: logger.error,
};

export default log;
