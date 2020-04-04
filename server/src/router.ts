import * as core from "express-serve-static-core";

import cryptocurrencies from "./routes/cryptocurrencies";
import passthrough from "./routes/passthrough";

const routes = (app: core.Express) => {
  // NICE: use an API documentation framework
  cryptocurrencies(app);
  passthrough(app);
};

export default routes;
