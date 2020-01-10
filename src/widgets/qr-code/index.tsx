import React from "react";
import QRCode from "qrcode.react";

import { Dimensions } from "components/widget";

import { WidgetProps } from "../index";

const getSquareSize = (dimensions?: Dimensions) => {
  return Math.min(dimensions?.width || 0, dimensions?.height || 0);
};

const QrCode: React.FC<Props> = ({ id, meta, content }) => {
  const imageSize = getSquareSize(meta.dimensions);
  if (content === undefined) return null;
  return (
    <div className="flex items-center h-full">
      <QRCode size={imageSize - 10} value={content} />
    </div>
  );
};

interface Props extends WidgetProps {
  content: string;
}

export default QrCode;
