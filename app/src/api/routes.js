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
  ContentType["Text"] = "text/plain";
})(ContentType || (ContentType = {}));
export class HttpClient {
  instance;
  securityData = null;
  securityWorker;
  secure;
  format;
  constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:3401/" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }
  setSecurityData = (data) => {
    this.securityData = data;
  };
  mergeRequestParams(params1, params2) {
    const method = params1.method || (params2 && params2.method);
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase()]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }
  stringifyFormItem(formItem) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }
  createFormData(input) {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent = property instanceof Array ? property : [property];
      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }
      return formData;
    }, new FormData());
  }
  request = async ({ secure, path, type, query, format, body, ...params }) => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;
    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body);
    }
    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }
    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
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
  cryptocurrencies = {
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
  github = {
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
  twitter = {
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
  unsplash = {
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
  weather = {
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
  youtube = {
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
