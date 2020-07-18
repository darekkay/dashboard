import log from "./log";
import app from "./app";

// Run HTTP server
app.listen(app.get("port"), () => {
  log.info("Server running at http://localhost:" + app.get("port"));
});
