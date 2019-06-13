import React, { memo } from "react";

import "./styles.scss";

const Loading = memo(() => (
  <div className="loading mx-auto" aria-label="Loading..." />
));

export default Loading;
