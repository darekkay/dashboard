import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { WidgetProps } from "../index";

const Text: React.FC<Props> = memo(({ id, content, setData }) => {
  const { t } = useTranslation();
  return (
    <textarea
      className="py-1 px-3 w-full h-full border-0 resize-none bg-color-panel"
      aria-label={t("widget.text.name")}
      onChange={event =>
        setData({ id, values: { content: event.target.value } })
      }
      value={content}
    />
  );
});

interface Props extends WidgetProps {
  content?: string;
}

export default Text;
