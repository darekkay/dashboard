import React, { memo } from "react";
import cn from "classnames";

import "./styles.scss";

export interface Props {
  className?: string;
}

const Loading = memo(({ className }: Props) => (
  <div className={cn("loading mx-auto", className)} aria-label="Loading..." />
));

export default Loading;
