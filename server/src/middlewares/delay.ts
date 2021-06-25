import { Request, Response, NextFunction } from "express";
import random from "lodash/random";

import { requestContains } from "../utils";

const delayMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  if (requestContains(req, "debug.delay")) {
    setTimeout(next, random(1000, 5000));
  } else {
    // eslint-disable-next-line node/callback-return
    next();
  }
};

export default delayMiddleware;
