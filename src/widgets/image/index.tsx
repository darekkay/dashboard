import React, { memo } from "react";
import _ from "lodash";

import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { widgetType } from "./properties";

const Image: React.FC<Props> = memo(({ id, url, setData }) => {
  if (_.isEmpty(url)) return <WidgetUnconfigured type={widgetType} />;
  return <img src={url} alt="" />;
});

interface Props extends WidgetProps {
  url: string;
}

export default Image;
