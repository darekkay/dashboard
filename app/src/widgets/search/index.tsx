import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import Button from "components/button";
import Input from "components/forms/input";
import Icon from "components/icon";
import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { Props as ConfigurationProps } from "./configuration";
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

const Search: React.FC<Props> = ({ id, pattern }) => {
  const [value, setValue] = useState("");
  const { t } = useTranslation();
  if (_.isEmpty(pattern)) return <WidgetUnconfigured type={widgetType} />;
  return (
    <div className="max-w-full w-full p-3">
      <div className="flex items-center">
        <Input
          value={value}
          setValue={setValue}
          onEnter={value => openSearchUrl(pattern, value, setValue)}
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

export interface Props extends WidgetProps, ConfigurationProps {}

export default Search;
