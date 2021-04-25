import React from "react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";

export default {
  title: "Widgets/QrCode",
};

export const Variants = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="qr-code-01"
      type="qr-code"
      options={{ content: "https://dashboard.darekkay.com/" }}
      data={{}}
    />
  );
};
