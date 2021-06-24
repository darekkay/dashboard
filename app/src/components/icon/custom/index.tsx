import React from "react";

import { ReactComponent as Cloud } from "./weather/cloud.svg";
import { ReactComponent as Clouds } from "./weather/clouds.svg";
import { ReactComponent as CloudMoon } from "./weather/cloud-moon.svg";
import { ReactComponent as CloudMoonRain } from "./weather/cloud-moon-rain.svg";
import { ReactComponent as CloudShowers } from "./weather/cloud-showers-heavy.svg";
import { ReactComponent as CloudSun } from "./weather/cloud-sun.svg";
import { ReactComponent as CloudSunRain } from "./weather/cloud-sun-rain.svg";
import { ReactComponent as Fog } from "./weather/fog.svg";
import { ReactComponent as Moon } from "./weather/moon.svg";
import { ReactComponent as Snow } from "./weather/snowflake.svg";
import { ReactComponent as Sun } from "./weather/sun.svg";
import { ReactComponent as Thunderstorm } from "./weather/thunderstorm.svg";

export type CustomIconName =
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

const icons: Record<
  CustomIconName,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  // day variants
  "01d": Sun,
  "02d": CloudSun,
  "03d": Cloud,
  "04d": Clouds,
  "09d": CloudShowers,
  "10d": CloudSunRain,
  "11d": Thunderstorm,
  "13d": Snow,
  "50d": Fog,

  // night variants
  "01n": Moon,
  "02n": CloudMoon,
  "03n": Cloud,
  "04n": Clouds,
  "09n": CloudShowers,
  "10n": CloudMoonRain,
  "11n": Thunderstorm,
  "13n": Snow,
  "50n": Fog,
};

export default icons;
