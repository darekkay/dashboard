import React, { memo } from "react";

import { WidgetProps } from "../index";

const Website: React.FC<Props> = memo(({ id, url, setData }) => {
  return <iframe src={url} title={id} className="h-full w-full"></iframe>;
});

interface Props extends WidgetProps {
  url: string;
}

export default Website;
