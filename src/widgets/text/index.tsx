import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import TextArea from "components/forms/text-area";

import { WidgetProps } from "../index";

const Text: React.FC<Props> = memo(({ id, content, setData }) => {
  const { t } = useTranslation();
  return (
    <TextArea
      className="border-0 bg-color-panel"
      aria-label={t("widget.text.name")}
      setValue={value => setData({ id, values: { content: value } })}
      value={content}
    />
  );
});

interface Props extends WidgetProps {
  content?: string;
}

export default Text;
