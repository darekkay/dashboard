import axios from "axios";
import cachios from "cachios";
import logger from "@darekkay/logger";

const axiosInstance = axios.create({
  timeout: 10000,
});

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
axiosInstance?.interceptors.request.use((config) => {
  /* Log axios requests to verify caching */
  logger.info(`[Axios Request] ${config.method?.toUpperCase()} ${config.url}`);
  return config;
});

export default cachios.create(axiosInstance);
