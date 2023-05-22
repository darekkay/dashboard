import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@darekkay/react-ui";

import { ConfigurationProps } from "widgets/index";
import DatePicker from "components/forms/date-picker";

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<WidgetOptions>) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <Input
        label={t("widget.day-countdown.configuration.eventName")}
        value={options.eventName}
        setValue={(value) => setOptions({ eventName: value })}
        type="text"
        onEnter={save}
      />
      <DatePicker
        label={t("widget.day-countdown.configuration.eventDate")}
        value={options.eventDate}
        setValue={(value) => setOptions({ eventDate: value })}
      />
    </div>
  );
};

export interface WidgetOptions {
  eventName: string;
  eventDate?: string;
}

export default Configuration;
