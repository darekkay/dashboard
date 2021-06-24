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

import axios from "axios";
export var ContentType;
(function (ContentType) {
  ContentType["Json"] = "application/json";
  ContentType["FormData"] = "multipart/form-data";
  ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
  constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
    this.securityData = null;
    this.setSecurityData = (data) => {
      this.securityData = data;
    };
    this.request = async ({ secure, path, type, query, format, body, ...params }) => {
      const secureParams =
        ((typeof secure === "boolean" ? secure : this.secure) &&
          this.securityWorker &&
          (await this.securityWorker(this.securityData))) ||
        {};
      const requestParams = this.mergeRequestParams(params, secureParams);
      const responseFormat = (format && this.format) || void 0;
      if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
        requestParams.headers.common = { Accept: "*/*" };
        requestParams.headers.post = {};
        requestParams.headers.put = {};
        const formData = new FormData();
        for (const key in body) {
          formData.append(key, body[key]);
        }
        body = formData;
      }
      return this.instance.request({
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
          ...(requestParams.headers || {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      });
    };
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:3401/" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }
  mergeRequestParams(params1, params2) {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }
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
export class Api extends HttpClient {
  constructor() {
    super(...arguments);
    this.cryptocurrencies = {
      /**
       * @description Returns the current price for a cryptocurrency.
       *
       * @name GetCryptocurrencyPrice
       * @request GET:/cryptocurrencies/price
       */
      getCryptocurrencyPrice: (query, params = {}) =>
        this.request({
          path: `/cryptocurrencies/price`,
          method: "GET",
          query: query,
          format: "json",
          ...params,
        }),
    };
    this.github = {
      /**
       * @description Returns stats for a GitHub user or repository.
       *
       * @name GetGitHubStats
       * @request GET:/github/stats
       */
      getGitHubStats: (query, params = {}) =>
        this.request({
          path: `/github/stats`,
          method: "GET",
          query: query,
          format: "json",
          ...params,
        }),
    };
    this.twitter = {
      /**
       * @description Returns stats for a Twitter user.
       *
       * @name GetTwitterStats
       * @request GET:/twitter/user
       */
      getTwitterStats: (query, params = {}) =>
        this.request({
          path: `/twitter/user`,
          method: "GET",
          query: query,
          format: "json",
          ...params,
        }),
    };
    this.unsplash = {
      /**
       * @description Returns a random Unsplash image.
       *
       * @name GetRandomImage
       * @request GET:/unsplash/random
       */
      getRandomImage: (params = {}) =>
        this.request({
          path: `/unsplash/random`,
          method: "GET",
          format: "json",
          ...params,
        }),
    };
    this.weather = {
      /**
       * @description Returns weather data.
       *
       * @name GetWeatherData
       * @request GET:/weather
       */
      getWeatherData: (query, params = {}) =>
        this.request({
          path: `/weather`,
          method: "GET",
          query: query,
          format: "json",
          ...params,
        }),
    };
    this.youtube = {
      /**
       * @description Returns stats for a YouTube account.
       *
       * @name GetYoutubeStats
       * @request GET:/youtube/stats
       */
      getYoutubeStats: (query, params = {}) =>
        this.request({
          path: `/youtube/stats`,
          method: "GET",
          query: query,
          format: "json",
          ...params,
        }),
    };
  }
}
