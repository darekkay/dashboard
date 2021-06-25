import { Request, Response, NextFunction } from "express";

import { requestContains } from "../utils";

/** Always send an error response. */
const errorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (requestContains(req, "debug.error")) {
    res.status(500).end();
  } else {
    // eslint-disable-next-line node/callback-return
    next();
  }
};

export default errorMiddleware;
