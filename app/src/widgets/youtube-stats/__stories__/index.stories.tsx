import React from "react";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

export default {
  title: "Widgets/YoutubeStats",
};

export const Variants = () => {
  return (
    <Widget
      {...widgetProps}
      id="youtube-stats-01"
      type="youtube-stats"
      options={{
        query: "https://www.youtube.com/c/darekkay",
      }}
      data={{
        channelTitle: "Darek Kay",
        subscriberCount: 1642,
        viewCount: 2047174,
      }}
      meta={initialMeta("youtube-stats")}
    />
  );
};
