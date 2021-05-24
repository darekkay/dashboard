import axios from "axios";

import { API_BASE_URL } from "common/environment";

import { Api } from "./routes";

/** Re-export type definitions */
export * from "./routes";

export const PASSTHROUGH = "/passthrough";

const axiosConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
};

export type PassthroughParams = {
  url: string;
  ttl?: number;
};

export const passthrough = async (params: PassthroughParams) =>
  axios.create(axiosConfig).get("/passthrough", { params });

export default new Api(axiosConfig);
