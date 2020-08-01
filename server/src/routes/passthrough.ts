import {
  Express,
  Request,
  Response,
  NextFunction,
} from "express-serve-static-core";

import axios from "../axios";

const routes = (app: Express) => {
  /* Passthrough a GET resource to bypass CORS */
  app.get(
    "/passthrough",
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        const { url, ttl, responseType } = request.query;
        const axiosResponse = await axios.get(url, { ttl: ttl || 5 * 60 });

        if (responseType === "json") {
          return response.json(axiosResponse.data);
        } else {
          return response.send(axiosResponse.data);
        }
      } catch (error) {
        return next(error);
      }
    }
  );
};

export default routes;
