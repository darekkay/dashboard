import React, { memo, useState } from "react";

import Button, { ButtonSize } from "components/button";
import Input from "components/input";
import Icon from "components/icon";

import { WidgetProps } from "../index";

// TODO: add clear button
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

const Search = memo(({ id, setDataValue, name, pattern }: Props) => {
  const [value, setValue] = useState("");
  return (
    <div className="max-w-full w-100 p-5">
      <div>
        <strong>{name}</strong>
      </div>
      <div className="flex items-center">
        <Input
          value={value}
          setValue={setValue}
          onEnter={value => openSearchUrl(pattern, value, setValue)}
          onEscape={() => setValue("")}
        />
        <Button
          className="m-2"
          size={ButtonSize.Small}
          disabled={!value}
          onClick={() => openSearchUrl(pattern, value, setValue)}
        >
          <Icon name="search" alt="Open search results" />
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
