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

const GithubStats: React.FC<Props> = ({
  id,
  type,
  stars,
  followers,
  subscribers,
  forks,
  open_issues,
  query,
  meta,
  triggerUpdate,
  widgetStatusDisplay,
}) => {
  const { t } = useTranslation();
  useTriggerUpdate({ id, params: { query }, meta, triggerUpdate }, [query]);

  if (isEmpty(query)) return <WidgetUnconfigured type={type} />;

  if (widgetStatusDisplay) return widgetStatusDisplay;

  if (meta.errorCode === 404)
    return <WidgetError labelKey={t("widget.github-stats.error.404")} />;

  return (
    <div>
      <StatsRow
        icon="star"
        value={stars}
        labelKey="widget.github-stats.stars"
      />
      <StatsRow
        icon="userFriends"
        value={followers}
        labelKey="widget.github-stats.followers"
      />
      <StatsRow
        icon="userFriends"
        value={subscribers}
        labelKey="widget.github-stats.subscribers"
      />
      <StatsRow
        icon="codeBranch"
        value={forks}
        labelKey="widget.github-stats.forks"
      />
      <StatsRow
        icon="error"
        value={open_issues}
        labelKey="widget.github-stats.openIssues"
      />
    </div>
  );
};

interface Props extends WidgetProps, WidgetOptions {
  name?: string;

  followers?: number;
  stars?: number;
  subscribers?: number;
  forks?: number;
  open_issues?: number;
}

export default GithubStats;
