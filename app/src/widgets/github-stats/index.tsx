import React from "react";
import { useTranslation } from "react-i18next";
import isEmpty from "lodash/isEmpty";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import Icon, { IconName } from "components/icon";
import WidgetUnconfigured from "components/widget-unconfigured";
import WidgetError from "components/widget-error";

import { WidgetProps } from "../index";
import { Props as ConfigurationProps } from "./configuration";
import { widgetType } from "./properties";

export { saga } from "./sagas";

const StatsRow: React.FC<{
  value: number | string;
  labelKey: string;
  icon: IconName;
}> = ({ value, labelKey, icon }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center">
      <Icon name={icon} position="left" />
      <div className="font-semibold text-3 mx-2">{value}</div>
      <div className="text-2">{t(labelKey)}</div>
    </div>
  );
};

const GithubStats: React.FC<Props> = ({
  id,
  stars,
  followers,
  subscribers,
  forks,
  open_issues,
  query,
  meta,
  triggerUpdate,
}) => {
  const { t } = useTranslation();
  useTriggerUpdate({ id, params: { query }, meta, triggerUpdate }, [query]);

  if (isEmpty(query)) return <WidgetUnconfigured type={widgetType} />;
  if (meta.errorCode === 404)
    return <WidgetError labelKey={t("widget.github-stats.error.404")} />;

  return (
    <div>
      {typeof stars === "number" && (
        <StatsRow
          icon="star"
          value={stars}
          labelKey="widget.github-stats.stars"
        />
      )}
      {typeof followers === "number" && (
        <StatsRow
          icon="userFriends"
          value={followers}
          labelKey="widget.github-stats.followers"
        />
      )}
      {typeof subscribers === "number" && (
        <StatsRow
          icon="userFriends"
          value={subscribers}
          labelKey="widget.github-stats.subscribers"
        />
      )}
      {typeof forks === "number" && (
        <StatsRow
          icon="codeBranch"
          value={forks}
          labelKey="widget.github-stats.forks"
        />
      )}
      {typeof open_issues === "number" && (
        <StatsRow
          icon="error"
          value={open_issues}
          labelKey="widget.github-stats.openIssues"
        />
      )}
    </div>
  );
};

interface Props extends WidgetProps, ConfigurationProps {
  name?: string;

  followers?: number;
  stars?: number;
  subscribers?: number;
  forks?: number;
  open_issues?: number;
}

export default GithubStats;
