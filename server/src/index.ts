import logger from "@darekkay/logger";

import app from "./app";

// Run HTTP server
app.listen(app.get("port"), () => {
  logger.info(`Server running at http://localhost:${app.get("port")}`);
});
