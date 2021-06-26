import React from "react";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

export default {
  title: "Widgets/TwitterStats",
};

export const Variants = () => {
  return (
    <Widget
      {...widgetProps}
      id="twitter-stats-01"
      type="twitter-stats"
      options={{
        username: "darek_kay",
      }}
      data={{
        followers: 4962,
        following: 191,
        tweets: 984289,
        listed: 0,
      }}
      meta={initialMeta("twitter-stats")}
    />
  );
};
