import React from "react";
import { useTranslation } from "react-i18next";
import isEmpty from "lodash/isEmpty";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import StatsRow from "components/stats-row";
import WidgetError from "components/widget-error";
import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";

export { saga } from "./sagas";

const TwitterStats: React.FC<Props> = ({
  id,
  type,
  username,
  followers,
  following,
  tweets,
  listed,
  meta,
  triggerUpdate,
  widgetStatusDisplay,
}) => {
  const { t } = useTranslation();
  useTriggerUpdate({ id, params: { username }, meta, triggerUpdate }, [
    username,
  ]);

  if (isEmpty(username)) return <WidgetUnconfigured type={type} />;

  if (widgetStatusDisplay) return widgetStatusDisplay;

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
