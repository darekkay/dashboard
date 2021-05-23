import React from "react";
import { useTranslation } from "react-i18next";

import TextArea from "components/forms/text-area";

import { WidgetProps } from "../index";

const Text: React.FC<Props> = ({ id, content, setData }) => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full h-full p-1 items-stretch">
      <TextArea
        className="border-0 bg-color-panel text-3"
        aria-label={t("widget.text.name")}
        setValue={(value) => setData({ id, values: { content: value } })}
        value={content}
      />
    </div>
  );
};

interface Props extends WidgetProps {
  content?: string;
}

export default Text;
