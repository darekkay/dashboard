import React from "react";
import { useTranslation } from "react-i18next";
import isEmpty from "lodash/isEmpty";
import dayjs from "dayjs";

import { WeatherData } from "api";
import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import WidgetUnconfigured from "components/widget-unconfigured";
import Icon from "components/icon";
import Loading from "components/loading";
import WidgetError from "components/widget-error";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";
import properties from "./properties";

export { saga } from "./sagas";

const Weather: React.FC<Props> = ({
  id,
  lat,
  lon,
  current,
  forecast = [],
  unit,
  meta,
  triggerUpdate,
}) => {
  const { t } = useTranslation();
  useTriggerUpdate({ id, params: { lat, lon, unit }, meta, triggerUpdate }, [
    lat,
    lon,
    unit,
  ]);
  if (isEmpty(lat) || isEmpty(lon))
    return <WidgetUnconfigured type={properties.widgetType} />;

  if (!current) {
    if (meta.updateStatus === "pending") {
      return <Loading />;
    } else {
      return <WidgetError labelKey="error.connectionError" />;
    }
  }

  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center mr-6">
        <div className="text-6 font-semibold">{current.temperature}°</div>
        <div className="text-7 leading-tight">
          <Icon
            name={current.condition.icon}
            alt={current.condition.description}
          />
        </div>
      </div>

      <div className="flex space-x-5">
        {forecast.map((singleForecast) => (
          <div key={singleForecast.date} className="flex flex-col items-center">
            <div className="mb-2 text-2 font-semibold text-offset uppercase">
              {dayjs.unix(singleForecast.date).format("ddd")}
            </div>
            <div className="text-6 leading-tight">
              <Icon
                name={singleForecast.condition.icon}
                alt={singleForecast.condition.description}
              />
            </div>
            <div className="text-3 leading-tight">
              {singleForecast.temperatureMax}°
            </div>
            <div className="text-3 leading-tight">
              {singleForecast.temperatureMin}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props extends WidgetProps, WidgetOptions, WeatherData {}

export default Weather;
