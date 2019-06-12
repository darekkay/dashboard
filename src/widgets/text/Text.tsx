import React, { memo } from "react";

const Text = memo(({ id, content, setDataValue }: Props) => {
  return (
    <textarea
      className="py-1 px-3 w-100 h-100 border-0 resize-none text-color-widget bg-color-widget"
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
