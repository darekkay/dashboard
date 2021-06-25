import React from "react";
import isEmpty from "lodash/isEmpty";

import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";

const Image: React.FC<Props> = ({ type, url }) => {
  if (isEmpty(url)) return <WidgetUnconfigured type={type} />;
  return <img src={url} className="h-full w-full object-fit-cover" alt="" />;
};

interface Props extends WidgetProps, WidgetOptions {}

export default Image;
