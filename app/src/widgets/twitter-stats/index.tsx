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

const TwitterStats: React.FC<Props> = ({
  id,
  username,
  followers,
  following,
  tweets,
  listed,
  meta,
  triggerUpdate,
}) => {
  const { t } = useTranslation();
  useTriggerUpdate({ id, params: { username }, meta, triggerUpdate }, [
    username,
  ]);
  if (isEmpty(username))
    return <WidgetUnconfigured type={properties.widgetType} />;
  if (meta.errorCode === 404)
    return <WidgetError labelKey={t("widget.twitter-stats.error.404")} />;
  return (
    <div>
      <StatsRow
        icon="userFriends"
        value={followers}
        labelKey="widget.twitter-stats.followers"
      />
      <StatsRow
        icon="eye"
        value={following}
        labelKey="widget.twitter-stats.following"
      />
      <StatsRow
        icon="pencil"
        value={tweets}
        labelKey="widget.twitter-stats.tweets"
      />
      <StatsRow
        icon="file"
        value={listed}
        labelKey="widget.twitter-stats.listed"
      />
    </div>
  );
};

interface Props extends WidgetProps, WidgetOptions {
  followers?: number;
  following?: number;
  tweets?: number;
  listed?: number;
}

export default TwitterStats;
