import axios from "axios";
import cachios from "cachios";

import log from "./log";

const axiosInstance = axios.create({
  timeout: 10000
});

axiosInstance?.interceptors.request.use(config => {
  /* Log axios requests to verify caching */
  log.info(`[Axios Request] ${config.method?.toUpperCase()} ${config.url}`);
  return config;
});

export default cachios.create(axiosInstance);
