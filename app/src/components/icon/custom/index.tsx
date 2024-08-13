import React from "react";

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

const icons: Record<
  CustomIconName,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  sun: Sun,
  "cloud-sun": CloudSun,
  "cloud-sun-rain": CloudSunRain,
  moon: Moon,
  "cloud-moon": CloudMoon,
  "cloud-moon-rain": CloudMoonRain,
  clouds: Clouds,
  "cloud-showers": CloudShowers,
  thunderstorm: Thunderstorm,
  snow: Snow,
  fog: Fog,
};

export default icons;
