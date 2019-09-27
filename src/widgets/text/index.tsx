import React, { memo } from "react";

import { WidgetProps } from "../index";

const Text = memo(({ id, content, setDataValue }: Props) => {
  return (
    <textarea
      className="py-1 px-3 w-full h-full border-0 resize-none bg-color-panel"
      aria-label="Text widget"
      // TODO: throttle
      onChange={event =>
        setDataValue({ id, key: "content", value: event.target.value })
      }
      value={content}
    />
  );
});

interface Props extends WidgetProps {
  content?: string;
}

export default Text;
