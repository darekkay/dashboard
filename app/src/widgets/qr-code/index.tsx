import React from "react";
import QRCode from "qrcode.react";
import _ from "lodash";

import WidgetUnconfigured from "components/widget-unconfigured";
import { Dimensions } from "components/widget";

import { WidgetProps } from "../index";
import { Props as ConfigurationProps } from "./configuration";
import { widgetType } from "./properties";

const getSquareSize = (dimensions?: Dimensions) => {
  return Math.min(dimensions?.width || 0, dimensions?.height || 0);
};

const QrCode: React.FC<Props> = ({ meta, content }) => {
  const imageSize = getSquareSize(meta.dimensions);
  if (_.isEmpty(content)) return <WidgetUnconfigured type={widgetType} />;
  return (
    <div className="flex items-center h-full">
      <QRCode size={imageSize - 10} value={content} />
    </div>
  );
};

interface Props extends WidgetProps, ConfigurationProps {}

export default QrCode;
