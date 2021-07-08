/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { writeFileSync } from "fs";
import { join } from "path";

import dayjs from "dayjs";
import cachios from "cachios";
import logger from "@darekkay/logger";

// eslint-disable-next-line import/no-self-import
import axios from "axios";

import config from "./config";

const axiosInstance = axios.create({
  timeout: 10000,
});

/* Log axios requests to verify caching */
axiosInstance?.interceptors.request.use((axiosConfig) => {
  logger.info(
    `[Axios Request] ${axiosConfig.method?.toUpperCase()} ${axiosConfig.url}`
  );
  return axiosConfig;
});

if (config.saveAxiosResponses) {
  /* Save axios response in a temporary file */
  axiosInstance?.interceptors.response.use((value) => {
    const fileName = dayjs().valueOf();
    writeFileSync(
      join(__dirname, "__temp__", `${fileName}.json`),
      JSON.stringify(value?.data, null, 2)
    );

    logger.info(
      `[Axios Response] ${value?.config?.url} saved to ${fileName}.json`
    );

    return value;
  });
}

export default cachios.create(axiosInstance);
