import React from "react";
import { useTranslation } from "react-i18next";
import isEmpty from "lodash/isEmpty";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import WidgetUnconfigured from "components/widget-unconfigured";
import WidgetError from "components/widget-error";
import StatsRow from "components/stats-row";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";
import { widgetType } from "./properties";

export { saga } from "./sagas";

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
