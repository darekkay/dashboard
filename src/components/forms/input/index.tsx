import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import Button, { ButtonSize, ButtonVariant } from "components/button";
import Label from "components/forms/label";
import Icon from "components/icon";

const onKeyUp = (event: any, props: Props) => {
  if (event.key === "Enter" && props.onEnter) {
    props.onEnter(event.target.value);
  } else if (event.key === "Escape" && props.clearOnEscape) {
    props.setValue("");
  }
};

const Input: React.FC<Props> = memo(props => {
  const {
    className,
    label,
    value,
    setValue,
    clearOnEscape,
    onEnter,
    ...domProps
  } = props;
  const [isFocused, setFocused] = useState(false);
  const { t } = useTranslation();
  return (
    <Label text={label}>
      <div
        className="w-full relative"
        onFocus={event => {
          setFocused(true);
        }}
        onBlur={event => {
          const currentTarget = event.currentTarget as Element;
          const relatedTarget = event.relatedTarget as Element;
          setFocused(relatedTarget && currentTarget?.contains(relatedTarget));
        }}
      >
        <input
          className={cn(
            "w-full p-2 border rounded text-color-default text-2",
            {
              "pr-7": isFocused,
              "bg-color-default": !className?.includes("bg-color-")
            },
            className
          )}
          onChange={event => {
            setValue(event.target.value);
          }}
          onKeyUp={event => onKeyUp(event, props)}
          value={value}
          {...domProps}
        />
        {value && isFocused && (
          <Button
            className="absolute right-0 h-full"
            size={ButtonSize.Small}
            variant={ButtonVariant.Unstyled}
            onClick={() => setValue("")}
            aria-label={t("common.clear")}
          >
            <Icon name="times" />
          </Button>
        )}
      </div>
    </Label>
  );
});

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue: (value: string) => void;
  onEnter?: (value: string) => void;
  clearOnEscape?: boolean;
}

export default Input;
