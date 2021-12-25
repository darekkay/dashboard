import React from "react";
import QrCodeLib from "react-qr-code";
import isEmpty from "lodash/isEmpty";

import WidgetUnconfigured from "components/widget-unconfigured";
import { Dimensions } from "components/widget";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";

const getSquareSize = (dimensions?: Dimensions) => {
  return Math.min(dimensions?.width ?? 0, dimensions?.height ?? 0);
};

const QrCode: React.FC<Props> = ({ type, meta, content }) => {
  if (isEmpty(content)) return <WidgetUnconfigured type={type} />;
  const imageSize = getSquareSize(meta.dimensions);
  return (
    <div className="flex items-center h-full">
      <QrCodeLib size={imageSize - 10} value={content} />
    </div>
  );
};

interface Props extends WidgetProps, WidgetOptions {}

export default QrCode;
