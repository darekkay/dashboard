import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import isEmpty from "lodash/isEmpty";

import Button from "components/button";
import Input from "components/forms/input";
import Icon from "components/icon";
import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";
import properties from "./properties";

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

const Search: React.FC<Props> = ({ id, pattern }) => {
  const [value, setValue] = useState("");
  const { t } = useTranslation();
  if (isEmpty(pattern))
    return <WidgetUnconfigured type={properties.widgetType} />;
  return (
    <div className="max-w-full w-full p-3">
      <div className="flex items-center">
        <Input
          value={value}
          setValue={setValue}
          onEnter={(currentValue) =>
            openSearchUrl(pattern, currentValue, setValue)
          }
          clearOnEscape
          type="search"
          aria-labelledby={`widget-${id}-headline`}
        />
        <Button
          className="ml-3"
          size="small"
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
};

export interface Props extends WidgetProps, WidgetOptions {}

export default Search;
