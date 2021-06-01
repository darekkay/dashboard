import React from "react";
import QRCode from "qrcode.react";
import isEmpty from "lodash/isEmpty";

import WidgetUnconfigured from "components/widget-unconfigured";
import { Dimensions } from "components/widget";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";
import properties from "./properties";

const getSquareSize = (dimensions?: Dimensions) => {
  return Math.min(dimensions?.width ?? 0, dimensions?.height ?? 0);
};

const QrCode: React.FC<Props> = ({ meta, content }) => {
  if (isEmpty(content))
    return <WidgetUnconfigured type={properties.widgetType} />;
  const imageSize = getSquareSize(meta.dimensions);
  return (
    <div className="flex items-center h-full">
      <QRCode size={imageSize - 10} value={content} />
    </div>
  );
};

interface Props extends WidgetProps, WidgetOptions {}

export default QrCode;
