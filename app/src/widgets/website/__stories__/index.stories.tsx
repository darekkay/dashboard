import React from "react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

export default {
  title: "Widgets/Website",
};

export const Variants = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="website-01"
      type="website"
      options={{ url: "https://dashboard.darekkay.com/docs/" }}
      data={{}}
    />
  );
};
