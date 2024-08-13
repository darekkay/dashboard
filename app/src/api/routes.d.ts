/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CryptocurrencyPrice {
  /** @format double */
  currentPrice: number;
  last24h: {
    /** @format double */
    changePercentage: number;
    /** @format double */
    change: number;
  };
  imageUrl?: string;
  [key: string]: any;
}
export interface GitHubStats {
  name?: string;
  /** @format double */
  followers?: number;
  /** @format double */
  stars?: number;
  /** @format double */
  subscribers?: number;
  /** @format double */
  forks?: number;
  /** @format double */
  open_issues?: number;
  [key: string]: any;
}
export interface UnsplashImage {
  imageUrl?: string;
  authorName?: string;
  authorUrl?: string;
  altText?: string;
  [key: string]: any;
}
export declare enum WeatherIcon {
  Sun = "sun",
  CloudSun = "cloud-sun",
  CloudSunRain = "cloud-sun-rain",
  Moon = "moon",
  CloudMoon = "cloud-moon",
  CloudMoonRain = "cloud-moon-rain",
  Clouds = "clouds",
  CloudShowers = "cloud-showers",
  Thunderstorm = "thunderstorm",
  Snow = "snow",
  Fog = "fog",
}
export interface WeatherCondition {
  description: string;
  icon: WeatherIcon;
  [key: string]: any;
}
export interface WeatherData {
  current: {
    condition: WeatherCondition;
    /** @format double */
    temperature: number;
  };
  forecast: {
    condition: WeatherCondition;
    /** @format double */
    temperatureMax: number;
    /** @format double */
    temperatureMin: number;
    /** @format double */
    date: number;
  }[];
  [key: string]: any;
}
export interface YoutubeStats {
  channelTitle?: string;
  /** @format double */
  subscriberCount?: number;
  /** @format double */
  viewCount?: number;
  /** @format double */
  videoCount?: number;
  [key: string]: any;
}
export declare namespace Cryptocurrencies {
  /**
   * @description Returns the current price for a cryptocurrency.
   * @name GetCryptocurrencyPrice
   * @request GET:/cryptocurrencies/price
   */
  namespace GetCryptocurrencyPrice {
    type RequestParams = {};
    type RequestQuery = {
      /** cryptocurrency code, e.g. "bitcoin" */
      crypto: string;
      /** fiat currency code, e.g. "eur" */
      fiat: string;
    };
    type RequestBody = never;
    type RequestHeaders = {};
    type ResponseBody = CryptocurrencyPrice;
  }
}
export declare namespace Github {
  /**
   * @description Returns stats for a GitHub user or repository.
   * @name GetGitHubStats
   * @request GET:/github/stats
   */
  namespace GetGitHubStats {
    type RequestParams = {};
    type RequestQuery = {
      /** GitHub user or repository */
      query: string;
    };
    type RequestBody = never;
    type RequestHeaders = {};
    type ResponseBody = GitHubStats;
  }
}
export declare namespace Unsplash {
  /**
   * @description Returns a random Unsplash image.
   * @name GetRandomImage
   * @request GET:/unsplash/random
   */
  namespace GetRandomImage {
    type RequestParams = {};
    type RequestQuery = {};
    type RequestBody = never;
    type RequestHeaders = {};
    type ResponseBody = UnsplashImage;
  }
}
export declare namespace Weather {
  /**
   * @description Returns weather data.
   * @name GetWeatherData
   * @request GET:/weather
   */
  namespace GetWeatherData {
    type RequestParams = {};
    type RequestQuery = {
      /** Latitude */
      lat: string;
      /** Longtitude */
      lon: string;
      /** Unit */
      unit: "imperial" | "metric";
    };
    type RequestBody = never;
    type RequestHeaders = {};
    type ResponseBody = WeatherData;
  }
}
export declare namespace Youtube {
  /**
   * @description Returns stats for a YouTube account.
   * @name GetYoutubeStats
   * @request GET:/youtube/stats
   */
  namespace GetYoutubeStats {
    type RequestParams = {};
    type RequestQuery = {
      /** Youtube id or username */
      query: string;
    };
    type RequestBody = never;
    type RequestHeaders = {};
    type ResponseBody = YoutubeStats;
  }
}
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export declare type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}
export declare enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}
export declare class HttpClient<SecurityDataType = unknown> {
  instance: AxiosInstance;
  private securityData;
  private securityWorker?;
  private secure?;
  private format?;
  constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
  setSecurityData: (data: SecurityDataType | null) => void;
  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
  protected stringifyFormItem(formItem: unknown): string;
  protected createFormData(input: Record<string, unknown>): FormData;
  request: <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title dashboard-server
 * @version 1.5.0
 * @license MIT
 * @baseUrl http://localhost:3401/
 * @contact Darek Kay  <hello@darekkay.com> (https://darekkay.com/)
 *
 * A server for the dashboard app
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  cryptocurrencies: {
    /**
     * @description Returns the current price for a cryptocurrency.
     *
     * @name GetCryptocurrencyPrice
     * @request GET:/cryptocurrencies/price
     */
    getCryptocurrencyPrice: (
      query: {
        /** cryptocurrency code, e.g. "bitcoin" */
        crypto: string;
        /** fiat currency code, e.g. "eur" */
        fiat: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<CryptocurrencyPrice>>;
  };
  github: {
    /**
     * @description Returns stats for a GitHub user or repository.
     *
     * @name GetGitHubStats
     * @request GET:/github/stats
     */
    getGitHubStats: (
      query: {
        /** GitHub user or repository */
        query: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GitHubStats>>;
  };
  unsplash: {
    /**
     * @description Returns a random Unsplash image.
     *
     * @name GetRandomImage
     * @request GET:/unsplash/random
     */
    getRandomImage: (params?: RequestParams) => Promise<AxiosResponse<UnsplashImage>>;
  };
  weather: {
    /**
     * @description Returns weather data.
     *
     * @name GetWeatherData
     * @request GET:/weather
     */
    getWeatherData: (
      query: {
        /** Latitude */
        lat: string;
        /** Longtitude */
        lon: string;
        /** Unit */
        unit: "imperial" | "metric";
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<WeatherData>>;
  };
  youtube: {
    /**
     * @description Returns stats for a YouTube account.
     *
     * @name GetYoutubeStats
     * @request GET:/youtube/stats
     */
    getYoutubeStats: (
      query: {
        /** Youtube id or username */
        query: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<YoutubeStats>>;
  };
}
