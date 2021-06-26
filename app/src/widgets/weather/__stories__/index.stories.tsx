import React from "react";
import dayjs from "dayjs";
import random from "lodash/random";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import Section from "components/section";
import { initialMeta } from "widgets/list";

export default {
  title: "Widgets/Weather",
};

const weatherIcons = [
  "01d",
  "02d",
  "03d",
  "04d",
  "09d",
  "10d",
  "11d",
  "13d",
  "50d",
  "01n",
  "02n",
  "03n",
  "04n",
  "09n",
  "10n",
  "11n",
  "13n",
  "50n",
] as const;

const createForecast = () => {
  const forecast = [];
  const today = dayjs();
  for (let i = 0; i < 5; i++) {
    const temperatureMin = random(40) - 15;
    const temperatureMax = temperatureMin + random(20);
    forecast.push({
      date: today.add(i, "day").unix(),
      condition: {
        description: "clear sky",
        icon: weatherIcons[random(weatherIcons.length - 1)],
      },
      temperatureMin,
      temperatureMax,
    });
  }
  return forecast;
};

export const Variants = () => {
  return (
    <>
      <Section type="story" headline="Weather widget">
        <Widget
          {...widgetProps}
          id="weather-01"
          type="weather"
          options={{
            lat: "48.210552",
            lon: "16.376495",
            unit: "metric",
          }}
          data={{
            current: {
              temperature: 24,
              condition: {
                description: "clear sky",
                icon: "01d",
              },
            },
            forecast: createForecast(),
          }}
          meta={initialMeta("weather")}
        />
      </Section>
    </>
  );
};
