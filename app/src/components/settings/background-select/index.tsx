import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button, Input, InputProps } from "@darekkay/react-ui";

import { actions } from "common/ducks/config";

import builtInImages from "./images";
import selectComponentProps from "./selectors";

const toggleBuiltInImage = (
  backgroundUrl: string,
  changeBackgroundUrl: (url: string) => void
) => {
  const nextTemplateIndex =
    (builtInImages.indexOf(backgroundUrl) + 1) % builtInImages.length;
  changeBackgroundUrl(builtInImages[nextTemplateIndex]);
};

export const BackgroundSelect = (props: Props) => {
  const { backgroundUrl, changeBackgroundUrl, ...rest } = props;
  const { t } = useTranslation();
  return (
    <div className="flex items-end">
      <Input
        label={t("config.background.headline")}
        value={backgroundUrl}
        setValue={(backgroundUrlValue) =>
          changeBackgroundUrl(backgroundUrlValue)
        }
        {...rest}
      />
      <Button
        className="ml-5 mb-1"
        outline
        onClick={() => toggleBuiltInImage(backgroundUrl, changeBackgroundUrl)}
      >
        {t("common.random")}
      </Button>
    </div>
  );
};

export interface Props extends Omit<InputProps, "value" | "setValue"> {
  backgroundUrl: string;
  changeBackgroundUrl: (url: string) => void;
}

export default connect(selectComponentProps, {
  changeBackgroundUrl: actions.changeBackgroundUrl,
})(BackgroundSelect);
