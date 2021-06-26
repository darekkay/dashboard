import React from "react";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

export default {
  title: "Widgets/Image",
};

export const Variants = () => {
  return (
    <Widget
      {...widgetProps}
      id="image-01"
      type="image"
      options={{
        url: "https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      }}
    />
  );
};
