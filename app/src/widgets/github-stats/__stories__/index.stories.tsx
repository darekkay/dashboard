import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import Section from "components/section";

const Story = () => {
  return (
    <>
      <Section type="story" headline="GitHub User">
        <Widget
          {...connectedWidgetProps}
          id="github-stats-01"
          type="github-stats"
          options={{
            query: "darekkay"
          }}
          data={{
            name: "darekkay",
            followers: 142,
            stars: 314,
            forks: 17,
            open_issues: 5
          }}
          meta={{
            // TODO: the meta should be rather a "static" property of a widget
            //  redefining it everywhere shouldn't be required
            headlineIcon: "github"
          }}
        />
      </Section>
      <Section type="story" headline="GitHub Repository">
        <Widget
          {...connectedWidgetProps}
          id="github-stats-02"
          type="github-stats"
          options={{
            query: "darekkay/dashboard"
          }}
          data={{
            name: "darekkay/dashboard",
            stars: 314,
            subscribers: 51,
            forks: 17,
            open_issues: 5
          }}
          meta={{
            headlineIcon: "github"
          }}
        />
      </Section>
    </>
  );
};

storiesOf("Widgets.GithubStats", module).add("Variants", () => <Story />);
