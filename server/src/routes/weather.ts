import _ from "lodash";
import dayjs from "dayjs";
import logger from "@darekkay/logger";
import { Controller, Get, Query, Route } from "tsoa";

import axios from "../axios";
import { ttlForWidgetType } from "../utils";

type WeatherIcon =
  | "sun"
  | "cloud-sun"
  | "cloud-sun-rain"
  | "moon"
  | "cloud-moon"
  | "cloud-moon-rain"
  | "clouds"
  | "cloud-showers"
  | "thunderstorm"
  | "snow"
  | "fog";

interface WeatherCondition {
  description: string;
  icon: WeatherIcon;
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

const getWeatherDescription = (weatherCode: number): string => {
  // TODO: internationalize this
  // WMO weather code
  return (
    {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      56: "Light freezing drizzle",
      57: "Dense freezing drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      66: "Light freezing rain",
      67: "Heavy freezing rain",
      80: "Slight rain showers",
      81: "Moderate rain showers",
      82: "Violent rain showers",
      71: "Slight snow fall",
      73: "Moderate snow fall",
      75: "Heavy snow fall",
      77: "Snow grains",
      85: "Slight snow showers",
      86: "Heavy snow showers",
      95: "Thunderstorm",
      96: "Thunderstorm with slight hail",
      99: "Thunderstorm with heavy hail",
    }[weatherCode] ?? "Unknown"
  );
};

// eslint-disable-next-line complexity
const getWeatherIcon = (
  weatherCode: number,
  time: "day" | "night"
): WeatherIcon => {
  // WMO weather code
  switch (weatherCode) {
    case 0:
    case 1:
      return time === "day" ? "sun" : "moon";
    case 2:
      return time === "day" ? "cloud-sun" : "cloud-moon";
    case 3:
      return "clouds";
    case 45:
    case 48:
      return "fog";
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 80:
    case 81:
    case 82:
      return time === "day" ? "cloud-sun-rain" : "cloud-moon-rain";
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return "cloud-showers";
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return "snow";
    case 95:
    case 96:
    case 99:
      return "thunderstorm";
    default: {
      logger.error(`Unknown weather code: ${weatherCode}`);
      // let's return _something_ anyway
      return time === "day" ? "sun" : "moon";
    }
  }
};

const getCondition = (
  weatherCode: number,
  time: "day" | "night"
): WeatherCondition => {
  return {
    description: getWeatherDescription(weatherCode),
    icon: getWeatherIcon(weatherCode, time),
  };
};

const getForecast = ({
  time,
  weather_code,
  temperature_2m_max,
  temperature_2m_min,
}: {
  time: Array<string>;
  weather_code: Array<number>;
  temperature_2m_min: Array<number>;
  temperature_2m_max: Array<number>;
}) => {
  return _.zipWith(
    time,
    weather_code,
    temperature_2m_min,
    temperature_2m_max,
    (date, weatherCode, temperatureMin, temperatureMax) => ({
      date: dayjs(date).unix(),
      condition: getCondition(weatherCode, "day"),
      temperatureMin: _.round(temperatureMin),
      temperatureMax: _.round(temperatureMax),
    })
  ).splice(0, 5);
};

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
      "https://api.open-meteo.com/v1/forecast",
      {
        params: {
          latitude: lat,
          longitude: lon,
          temperature_unit: unit === "imperial" ? "fahrenheit" : "celsius",
          current: "temperature_2m,is_day,weather_code",
          daily: "weather_code,temperature_2m_max,temperature_2m_min",
        },
        ttl: ttlForWidgetType("weather"),
      }
    );

    const { current, daily } = axiosResponse.data;

    return {
      current: {
        temperature: _.round(current.temperature_2m),
        condition: getCondition(
          current.weather_code,
          current.is_day === 1 ? "day" : "night"
        ),
      },
      forecast: getForecast(daily),
    };
  }
}
