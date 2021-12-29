import {
  Express,
  Request,
  Response,
  NextFunction,
} from "express-serve-static-core";

import axios from "../axios";

const isRequestValid = (request: Request) => !!request.query.url;

const routes = (app: Express) => {
  /* Passthrough a GET resource to bypass CORS */
  app.get(
    "/passthrough",
    /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
    async (request: Request, response: Response, next: NextFunction) => {
      if (!isRequestValid(request)) {
        return response.status(400).end();
      }

      try {
        const { url, ttl } = request.query;

        const axiosResponse = await axios.get(url as string, {
          ttl: ttl ? parseInt(ttl as string, 10) : 5 * 60,
        });

        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (axiosResponse.headers?.["content-type"]) {
          // pass through the content-type header
          // this block a migration to tsoa: https://github.com/lukeautry/tsoa/issues/968
          response.setHeader(
            "content-type",
            axiosResponse.headers["content-type"]
          );
        }
        return response.send(axiosResponse.data);
      } catch (error) {
        return next(error);
      }
    }
  );
};

export default routes;
