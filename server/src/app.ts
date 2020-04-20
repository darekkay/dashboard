import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";

import config from "./config";
import includeRoutes from "./router";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send("(づ｡◕‿‿◕｡)づ");
});

includeRoutes(app);

// TODO: custom error handling

app.set("port", config.port);

export default app;
