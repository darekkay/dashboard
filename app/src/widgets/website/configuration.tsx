import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";
import Button from "components/button";

import providers from "./lib/providers";

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<Props>) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <Input
        setValue={(value) => setOptions({ url: value })}
        value={options.url}
        label={t("widget.website.configuration.url")}
        type="url"
        autoComplete="url"
        onEnter={save}
      />
      <div>
        {providers.map((provider) => (
          <Button
            key={provider.title}
            className="mr-5 mb-2"
            variant="secondary"
            size="small"
            outline
            onClick={() =>
              setOptions({
                url: provider.url,
              })
            }
          >
            {provider.title}
          </Button>
        ))}
      </div>
      {/* NICE: Extract "Alert/Info" component */}
      <div>
        <Trans i18nKey="widget.website.configuration.disclaimer">
          <strong />
        </Trans>
      </div>
    </div>
  );
};

export interface Props {
  url: string;
}

export default Configuration;
