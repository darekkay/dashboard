import express, { ErrorRequestHandler } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import logger from "@darekkay/logger";

import config from "./config";
import includeRoutes from "./router";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_request, response) => {
  response.send("(づ｡◕‿‿◕｡)づ");
});

includeRoutes(app);

// custom error handling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, __, response, ___) => {
  const axiosErrorStatusCode = error?.response?.status;

  // If the error comes from a 3rd party axios call, forward the response error code
  // Otherwise, return a generic 500 "Internal Server Error" code
  const responseStatusCode = axiosErrorStatusCode ?? 500;

  logger.error(error.stack);

  return response.status(responseStatusCode).json({
    error: responseStatusCode,
    external: !!responseStatusCode, // differentiate between internal and 3rd party errors
  });
};

app.use(errorHandler);

app.set("port", config.port);

export default app;
