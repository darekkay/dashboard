import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";
import Button, { ButtonSize } from "components/button";

import providers from "./lib/providers";

const Configuration = ({ id, options, setOptions }: ConfigurationProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={value => setOptions({ url: value })}
        value={options.url}
        label={t("widget.website.configuration.url")}
        className="mb-6"
        type="url"
        autoComplete="url"
      />
      <div>
        {providers.map(provider => (
          <Button
            key={provider.title}
            className="mr-5 mb-2"
            outline
            size={ButtonSize.Small}
            onClick={() =>
              setOptions({
                url: provider.url
              })
            }
          >
            {provider.title}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Configuration;
