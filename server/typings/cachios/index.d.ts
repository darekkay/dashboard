declare module "cachios" {
  import type { Options as NodeCacheOptions } from "node-cache";

  import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

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
