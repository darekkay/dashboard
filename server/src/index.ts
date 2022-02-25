import logger from "@darekkay/logger";

import app from "./app";

const githubCiTest: string = 1;

// Run HTTP server
app.listen(app.get("port"), () => {
  logger.info(`Server running at http://localhost:${app.get("port")}`);
});
