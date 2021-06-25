import express, { ErrorRequestHandler } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import logger from "@darekkay/logger";
import { ValidateError } from "@tsoa/runtime";

import config from "./config";
import delayMiddleware from "./middlewares/delay";
import swaggerDocument from "./api/swagger.json";
import { RegisterRoutes as registerRoutes } from "./api/routes";
import registerPassthroughRoute from "./routes/passthrough";

export const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(delayMiddleware);

app.get("/", (_request, response) => {
  response.send("(づ｡◕‿‿◕｡)づ");
});

// serve static files from public folder
app.use(express.static("public"));

// swagger ui
if (process.env.NODE_ENV === "development") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// a passthrough route
registerPassthroughRoute(app);

// tsoa routes
registerRoutes(app);

// custom error handling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, __, response, ___) => {
  if (error instanceof ValidateError) {
    // tsoa request validation failed
    return response.status(400).json({
      error: 400,
      external: false,
      message: "Validation failed",
      details: error.fields,
    });
  }

  // If the error comes from a 3rd party axios call, forward the response error code
  // Otherwise, return a generic 500 "Internal Server Error" code
  const axiosErrorStatusCode = error?.response?.status;
  const responseStatusCode = axiosErrorStatusCode ?? 500;

  logger.error(error?.stack);

  return response.status(responseStatusCode).json({
    error: responseStatusCode,
    external: !!axiosErrorStatusCode, // differentiate between internal and 3rd party errors
    message: error?.message,
  });
};

app.use(errorHandler);

app.set("port", config.port);

export default app;
