import React, { memo } from "react";
import isEmpty from "lodash/isEmpty";

import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";

const Website = memo(
  ({ id, type, url }: Props) => {
    if (isEmpty(url)) return <WidgetUnconfigured type={type} />;

    // eslint-disable-next-line react/iframe-missing-sandbox
    return <iframe src={url} title={id} className="h-full w-full" />;
  },
  (previousProps, nextProps) => previousProps.url === nextProps.url
);
Website.displayName = "Website";

interface Props extends WidgetProps, WidgetOptions {}

export default Website;
