import express, { ErrorRequestHandler } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";

import log from "./log";
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

// custom error handling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, __, res, ___) => {
  const axiosErrorStatusCode = error?.response?.status;

  // If the error comes from a 3rd party axios call, forward the response error code
  // Otherwise, return a generic 500 "Internal Server Error" code
  const responseStatusCode = axiosErrorStatusCode || 500;

  log.error(error.stack);

  return res.status(responseStatusCode).json({
    error: responseStatusCode,
    external: !!responseStatusCode, // differentiate between internal and 3rd party errors
  });
};

app.use(errorHandler);

app.set("port", config.port);

export default app;
