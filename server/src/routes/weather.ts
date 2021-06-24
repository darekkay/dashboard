import _ from "lodash";
import { Controller, Get, Query, Route } from "tsoa";

import axios from "../axios";
import config from "../config";
import { ttlForWidgetType } from "../utils";

interface WeatherCondition {
  description: string;
  icon:
    | "01d"
    | "02d"
    | "03d"
    | "04d"
    | "09d"
    | "10d"
    | "11d"
    | "13d"
    | "50d"
    | "01n"
    | "02n"
    | "03n"
    | "04n"
    | "09n"
    | "10n"
    | "11n"
    | "13n"
    | "50n";
}

interface WeatherData {
  current: {
    temperature: number;
    condition: WeatherCondition;
  };
  forecast: Array<{
    date: number;
    temperatureMin: number;
    temperatureMax: number;
    condition: WeatherCondition;
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

    return {
      current: {
        temperature: _.round(values.current.temp),
        condition: values.current.weather?.[0],
      },
      forecast: values.daily.splice(0, 5).map((daily: any) => ({
        date: daily.dt,
        temperatureMin: _.round(daily.temp.min),
        temperatureMax: _.round(daily.temp.max),
        condition: daily.weather?.[0],
      })),
    };
  }
}
