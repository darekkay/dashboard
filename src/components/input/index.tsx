import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import Button, { ButtonSize, ButtonVariant } from "components/button";
import Icon from "components/icon";

const onKeyUp = (
  event: any,
  onEnter?: (value: string) => void,
  onEscape?: (value: string) => void
) => {
  if (event.key === "Enter" && onEnter) {
    onEnter(event.target.value);
  } else if (event.key === "Escape" && onEscape) {
    onEscape(event.target.value); // TODO: convert into "clearOnEscape"
  }
};

const Input: React.FC<Props> = memo(
  ({ className, label, value, setValue, onEnter, onEscape, ...domProps }) => {
    const [isFocused, setFocused] = useState(false);
    const { t } = useTranslation();
    return (
      <label
        className="max-w-full w-full flex flex-col"
        onFocus={event => {
          setFocused(true);
        }}
        onBlur={event => {
          const currentTarget = event.currentTarget as Element;
          const relatedTarget = event.relatedTarget as Element;
          setFocused(
            currentTarget &&
              relatedTarget &&
              currentTarget.contains(relatedTarget)
          );
        }}
      >
        {label && <span className="mb-2 text-2">{label}</span>}
        <div className="relative">
          <input
            className={cn(
              "w-full p-2 border rounded text-color-default bg-color-default text-2",
              {
                "pr-7": isFocused
              },
              className
            )}
            onChange={event => {
              setValue(event.target.value);
            }}
            onKeyUp={event => onKeyUp(event, onEnter, onEscape)}
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
      </label>
    );
  }
);

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue: (value: string) => void;
  onEnter?: (value: string) => void;
  onEscape?: (value: string) => void;
}

export default Input;
