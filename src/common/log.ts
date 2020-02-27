import logger from "loglevel";

import { IS_PRODUCTION } from "common/environment";

logger.setLevel(IS_PRODUCTION ? logger.levels.INFO : logger.levels.TRACE);

/* Custom logger facade */
const log = {
  trace: logger.trace,
  debug: logger.debug,
  info: logger.info,
  warn: logger.warn,
  error: logger.error
};

export default log;
