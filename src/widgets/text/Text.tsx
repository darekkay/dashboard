import React, { memo } from "react";

import "./Text.scss";

const Text = memo(({ id, content, setDataValue }: Props) => {
  return (
    <textarea
      aria-label="Text widget"
      // TODO: throttle
      onChange={event =>
        setDataValue({ id, key: "content", value: event.target.value })
      }
      value={content}
    />
  );
});

export interface Props {
  id: string;
  content?: string;
  setDataValue: (payload: object) => void;
}

export default Text;
