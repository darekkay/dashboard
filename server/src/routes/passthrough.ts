import axios from "axios";
import {
  Express,
  Request,
  Response,
  NextFunction
} from "express-serve-static-core";

const routes = (app: Express) => {
  /* Passthrough a GET resource to bypass CORS */
  app.get(
    "/passthrough",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { url, responseType } = req.query;
        const response = await axios.get(url);

        if (responseType === "json") {
          res.json(response.data);
        } else {
          res.send(response.data);
        }
      } catch (error) {
        next(error);
      }
    }
  );
};

export default routes;
