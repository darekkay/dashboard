import axios from "axios";
import cachios from "cachios";

const axiosInstance = axios.create({
  timeout: 10000
});

axiosInstance.interceptors.request.use(config => {
  /* Log axios requests to verify caching */
  console.info(`[Axios Request] ${config.method?.toUpperCase()} ${config.url}`);
  return config;
});

export default cachios.create(axiosInstance);
