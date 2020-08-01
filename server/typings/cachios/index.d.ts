declare module "cachios" {
  import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
  import { Options as NodeCacheOptions } from "node-cache";

  interface CachiosRequestConfig extends AxiosRequestConfig {
    ttl?: number;
    force?: boolean;
  }

  interface CachiosInstance extends AxiosInstance {
    get<T = any, R = AxiosResponse<T>>(
      url: string,
      config?: CachiosRequestConfig
    ): Promise<R>;
  }

  export function create(
    axiosInstance: AxiosInstance,
    nodeCacheConfig?: NodeCacheOptions
  ): CachiosInstance;
}
