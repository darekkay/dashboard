import React from "react";
import { useTranslation } from "react-i18next";
import isEmpty from "lodash/isEmpty";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import WidgetUnconfigured from "components/widget-unconfigured";
import WidgetError from "components/widget-error";
import StatsRow from "components/stats-row";

import { WidgetProps } from "../index";
import { Props as ConfigurationProps } from "./configuration";
import { widgetType } from "./properties";

export { saga } from "./sagas";

const YoutubeStats: React.FC<Props> = ({
  id,
  subscriberCount,
  viewCount,
  url,
  meta,
  triggerUpdate,
}) => {
  const { t } = useTranslation();
  useTriggerUpdate({ id, params: { url }, meta, triggerUpdate }, [url]);

  if (isEmpty(url)) return <WidgetUnconfigured type={widgetType} />;
  if (meta.errorCode === 404)
    return <WidgetError labelKey={t("widget.youtube-stats.error.404")} />;

  return (
    <div>
      <StatsRow
        icon="userFriends"
        value={subscriberCount}
        labelKey="widget.youtube-stats.subscriberCount"
      />
      <StatsRow
        icon="eye"
        value={viewCount}
        labelKey="widget.youtube-stats.viewCount"
      />
    </div>
  );
};

interface Props extends WidgetProps, ConfigurationProps {
  subscriberCount?: number;
  viewCount?: number;
  channelTitle?: string;
}

export default YoutubeStats;
