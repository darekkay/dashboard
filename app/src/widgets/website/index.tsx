import React, { memo } from "react";
import _ from "lodash";

import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { widgetType } from "./properties";

const Website: React.FC<Props> = memo(
  ({ id, url }) => {
    if (_.isEmpty(url)) return <WidgetUnconfigured type={widgetType} />;

    return <iframe src={url} title={id} className="h-full w-full"></iframe>;
  },
  (prevProps, nextProps) => prevProps.url === nextProps.url
);

interface Props extends WidgetProps {
  url: string;
}

export default Website;
