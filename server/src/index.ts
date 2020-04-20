import app from "./app";

// Run HTTP server
app.listen(app.get("port"), function() {
  // NICE: replace with a logger
  console.info("Server running at http://localhost:" + app.get("port"));
});
