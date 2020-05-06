import React from "react";
import _ from "lodash";

import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { Props as ConfigurationProps } from "./configuration";
import { widgetType } from "./properties";

const Image: React.FC<Props> = ({ url }) => {
  if (_.isEmpty(url)) return <WidgetUnconfigured type={widgetType} />;
  return <img src={url} className="h-full w-full object-fit-cover" alt="" />;
};

interface Props extends WidgetProps, ConfigurationProps {}

export default Image;
