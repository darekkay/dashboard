import React from "react";
import _ from "lodash";

import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { widgetType } from "./properties";

const Image: React.FC<Props> = ({ id, url, setData }) => {
  if (_.isEmpty(url)) return <WidgetUnconfigured type={widgetType} />;
  return <img src={url} className="h-full w-full object-fit-cover" alt="" />;
};

interface Props extends WidgetProps {
  url: string;
}

export default Image;
