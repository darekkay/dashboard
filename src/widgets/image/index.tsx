import React, { memo } from "react";

import { WidgetProps } from "../index";

const Image: React.FC<Props> = memo(({ id, url, setData }) => {
  return url ? <img src={url} alt="" /> : null;
});

interface Props extends WidgetProps {
  url: string;
}

export default Image;
