import React from "react";
import { useTranslation } from "react-i18next";
import isEmpty from "lodash/isEmpty";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import WidgetUnconfigured from "components/widget-unconfigured";
import WidgetError from "components/widget-error";
import StatsRow from "components/stats-row";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";
import properties from "./properties";

export { saga } from "./sagas";

const YoutubeStats: React.FC<Props> = ({
  id,
  subscriberCount,
  viewCount,
  videoCount,
  query,
  meta,
  triggerUpdate,
}) => {
  const { t } = useTranslation();
  useTriggerUpdate({ id, params: { query }, meta, triggerUpdate }, [query]);

  if (isEmpty(query))
    return <WidgetUnconfigured type={properties.widgetType} />;
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
      <StatsRow
        icon="videoFile"
        value={videoCount}
        labelKey="widget.youtube-stats.videoCount"
      />
    </div>
  );
};

interface Props extends WidgetProps, WidgetOptions {
  channelTitle?: string;
  subscriberCount?: number;
  viewCount?: number;
  videoCount?: number;
}

export default YoutubeStats;
