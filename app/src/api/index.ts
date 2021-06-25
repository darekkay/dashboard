import axios, { AxiosRequestConfig } from "axios";

import { API_BASE_URL, IS_DEVELOPMENT } from "common/environment";

import { Api } from "./routes";

/** Re-export type definitions */
export * from "./routes";

export const PASSTHROUGH = "/passthrough";

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    ...(IS_DEVELOPMENT ? { "x-dashboard-referrer": window.location.href } : {}),
  },
};

export type PassthroughParams = {
  url: string;
  ttl?: number;
};

export const passthrough = async (params: PassthroughParams) =>
  axios.create(axiosConfig).get("/passthrough", { params });

export default new Api(axiosConfig);
