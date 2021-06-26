import React from "react";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import Section from "components/section";
import { initialMeta } from "widgets/list";

export default {
  title: "Widgets/GithubStats",
};

export const Variants = () => {
  return (
    <div className="space-y-6">
      <Section type="story" headline="GitHub User">
        <Widget
          {...widgetProps}
          id="github-stats-01"
          type="github-stats"
          options={{
            query: "darekkay",
          }}
          data={{
            name: "darekkay",
            stars: 90213,
            followers: 11442,
            forks: 1705,
            open_issues: 0,
          }}
          meta={initialMeta("github-stats")}
        />
      </Section>
      <Section type="story" headline="GitHub Repository">
        <Widget
          {...widgetProps}
          id="github-stats-02"
          type="github-stats"
          options={{
            query: "darekkay/dashboard",
          }}
          data={{
            name: "darekkay/dashboard",
            stars: 314,
            subscribers: 51,
            forks: 17,
            open_issues: 5,
          }}
          meta={initialMeta("github-stats")}
        />
      </Section>
    </div>
  );
};
