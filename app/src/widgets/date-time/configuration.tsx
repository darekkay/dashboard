import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";
import Dropdown from "components/forms/dropdown";

const availableTimezones = [
  "auto",
  "Pacific/Midway",
  "Pacific/Samoa",
  "US/Hawaii",
  "US/Alaska",
  "US/Pacific",
  "America/Tijuana",
  "America/Chihuahua",
  "US/Mountain",
  "US/Central",
  "Mexico/General",
  "America/Bogota",
  "US/Eastern",
  "America/Santiago",
  "Canada/Atlantic",
  "America/Sao_Paulo",
  "America/Godthab",
  "Canada/Newfoundland",
  "Atlantic/Cape_Verde",
  "Atlantic/Azores",
  "Africa/Monrovia",
  "UTC",
  "Africa/Casablanca",
  "Europe/London",
  "Europe/Berlin",
  "Africa/Cairo",
  "Europe/Athens",
  "Europe/Moscow",
  "Asia/Baghdad",
  "Asia/Dubai",
  "Asia/Tehran",
  "Asia/Karachi",
  "Asia/Calcutta",
  "Asia/Kathmandu",
  "Asia/Almaty",
  "Asia/Rangoon",
  "Asia/Novosibirsk",
  "Asia/Bangkok",
  "Asia/Shanghai",
  "Asia/Hong_Kong",
  "Australia/Perth",
  "Singapore",
  "Asia/Seoul",
  "Asia/Tokyo",
  "Australia/Adelaide",
  "Australia/Sydney",
  "Asia/Vladivostok",
  "Asia/Magadan",
  "Pacific/Norfolk",
  "Pacific/Auckland",
  "Pacific/Fiji",
  "Asia/Kamchatka",
  "Pacific/Tongatapu",
] as const;
export type Timezone = typeof availableTimezones[number];

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<WidgetOptions>) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <Input
        setValue={(value) => setOptions({ headline: value })}
        value={options.headline}
        label={t("common.headline")}
        type="text"
        onEnter={save}
      />
      <Dropdown
        label={t("widget.date-time.configuration.timezone")}
        value={options.timezone}
        setValue={(value) => setOptions({ timezone: value })}
        getOptionLabel={(option) =>
          t(`widget.date-time.configuration.timezones.${option}`)
        }
        options={availableTimezones}
      />
    </div>
  );
};

export interface WidgetOptions {
  headline?: string;
  timezone: Timezone;
}

export default Configuration;
