import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Input, Link } from "@darekkay/react-ui";

import { ConfigurationProps } from "widgets/index";
import Dropdown from "components/forms/dropdown";

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<WidgetOptions>) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <Input
        setValue={(value) => setOptions({ lat: value })}
        value={options.lat}
        label={t("widget.weather.configuration.lat")}
        type="text"
        onEnter={save}
      />
      <Input
        setValue={(value) => setOptions({ lon: value })}
        value={options.lon}
        label={t("widget.weather.configuration.lon")}
        type="text"
        onEnter={save}
      />
      <p>
        <Trans
          i18nKey="widget.weather.configuration.latLonNotice"
          components={{
            mainLink: <Link href="https://www.latlong.net/">{""}</Link>,
            testLink: (
              <Link
                href={`https://www.latlong.net/c/?lat=${options.lat}&long=${options.lon}`}
              >
                {""}
              </Link>
            ),
          }}
        />
      </p>
      <Dropdown
        label={t("widget.weather.configuration.unit")}
        value={options.unit}
        setValue={(value) => setOptions({ unit: value })}
        getOptionLabel={(option) =>
          t(`widget.weather.configuration.units.${option}`)
        }
        options={["metric", "imperial"] as const}
      />
      <div className="text-right text-1">
        <Trans
          i18nKey="common.poweredBy"
          values={{ name: "Open-Meteo" }}
          components={{
            alink: <Link href="https://open-meteo.com/">{""}</Link>,
          }}
        />
      </div>
    </div>
  );
};

export interface WidgetOptions {
  lat: string;
  lon: string;
  unit: "metric" | "imperial";
}

export default Configuration;
