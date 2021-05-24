import _ from "lodash";
import { Controller, Get, Query, Route } from "tsoa";

import axios from "../axios";
import config from "../config";
import { ttlForWidgetType } from "../utils";

interface WeatherData {
  current: {
    temperature: number;
  };
  forecast: Array<{
    temperatureMin: number;
    temperatureMax: number;
  }>;
}

@Route("/weather")
export class WeatherController extends Controller {
  /**
   * Returns weather data.
   *
   * @param lat Latitude
   * @param lon Longtitude
   * @param unit Unit
   */
  @Get("/")
  public async getWeatherData(
    @Query() lat: string,
    @Query() lon: string,
    @Query() unit: "imperial" | "metric"
  ): Promise<WeatherData> {
    // TODO: allow passing a "location", or provide a separate endpoint for location resolution?
    const axiosResponse = await axios.get(
      "https://api.openweathermap.org/data/2.5/onecall",
      {
        params: {
          lat,
          lon,
          units: unit, // "imperial" | "metric"
          exclude: "minutely,hourly",
          appid: config.api.openWeatherMap,
        },
        ttl: ttlForWidgetType("weather"),
      }
    );

    const values = axiosResponse.data;

    // TODO: pass through all other required parameters (e.g. weather conditions)
    return {
      current: {
        temperature: _.round(values.current.temp),
      },
      forecast: values.daily.map((daily: any) => ({
        temperatureMin: _.round(daily.temp.min),
        temperatureMax: _.round(daily.temp.max),
      })),
    };
  }
}
