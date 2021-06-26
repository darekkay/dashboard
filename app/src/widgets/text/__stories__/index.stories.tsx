import React from "react";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

export default {
  title: "Widgets/Text",
};

export const Variants = () => {
  return (
    <Widget
      {...widgetProps}
      id="text-01"
      type="text"
      data={{ content: "Hello World!" }}
    />
  );
};
