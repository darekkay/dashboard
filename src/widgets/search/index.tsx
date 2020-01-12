import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import Button, { ButtonSize } from "components/button";
import Input from "components/forms/input";
import Icon from "components/icon";
import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { widgetType } from "./properties";

const openSearchUrl = (
  pattern: string,
  value: string,
  setValue: (value: string) => void
) => {
  if (value) {
    const url = pattern.replace("%s", value);
    window.open(url, "_blank");
    setValue("");
  }
};

const Search: React.FC<Props> = memo(({ id, setData, name, pattern }) => {
  if (_.isEmpty(pattern)) return <WidgetUnconfigured type={widgetType} />;
  const [value, setValue] = useState("");
  const { t } = useTranslation();
  return (
    <div className="max-w-full w-full p-3">
      <div className="flex items-center">
        <Input
          value={value}
          setValue={setValue}
          onEnter={value => openSearchUrl(pattern, value, setValue)}
          clearOnEscape
          aria-labelledby={`widget-${id}-headline`}
        />
        <Button
          className="ml-3"
          size={ButtonSize.Small}
          outline
          disabled={!value}
          aria-label={t("widget.search.buttonAriaLabel")}
          onClick={() => openSearchUrl(pattern, value, setValue)}
        >
          <Icon name="search" alt="" />
        </Button>
      </div>
    </div>
  );
});

interface Props extends WidgetProps {
  name: string;
  pattern: string;
}

export default Search;
