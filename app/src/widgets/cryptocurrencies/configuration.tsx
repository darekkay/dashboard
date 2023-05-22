import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "@darekkay/react-ui";

import { ConfigurationProps } from "widgets/index";
import Dropdown from "components/forms/dropdown";

const Configuration = ({
  options,
  setOptions,
}: ConfigurationProps<WidgetOptions>) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      {/* Supported currencies: https://www.coingecko.com/api/documentations/v3 */}
      <Dropdown
        label={t("widget.cryptocurrencies.configuration.fiat")}
        value={options.fiat}
        setValue={(value) => setOptions({ fiat: value })}
        getOptionLabel={(option) => option.toUpperCase()}
        options={[
          "eur",
          "usd",
          "gbp",
          "jpy",
          "aed",
          "ars",
          "aud",
          "bdt",
          "bhd",
          "bmd",
          "brl",
          "cad",
          "chf",
          "clp",
          "cny",
          "czk",
          "dkk",
          "hkd",
          "huf",
          "idr",
          "ils",
          "inr",
          "krw",
          "kwd",
          "lkr",
          "mmk",
          "mxn",
          "myr",
          "nok",
          "nzd",
          "php",
          "pkr",
          "pln",
          "rub",
          "sar",
          "sek",
          "sgd",
          "thb",
          "try",
          "twd",
          "uah",
          "vef",
          "vnd",
          "zar",
        ]}
      />
      <Dropdown
        label={t("widget.cryptocurrencies.configuration.crypto")}
        value={options.crypto}
        setValue={(value) => setOptions({ crypto: value })}
        getOptionLabel={(option) =>
          t(`widget.cryptocurrencies.crypto.${option}`)
        }
        options={[
          "bitcoin",
          "bitcoin-cash",
          "dash",
          "dogecoin",
          "eos",
          "ethereum",
          "link",
          "litecoin",
          "monero",
          "nano",
          "ripple",
          "stellar",
          "tether",
          "tezos",
          "zcash",
        ]}
      />
      <div className="text-right text-1">
        <Trans
          i18nKey="common.poweredBy"
          values={{ name: "CoinGecko" }}
          components={{
            alink: <Link href="https://www.coingecko.com/">{""}</Link>,
          }}
        />
      </div>
    </div>
  );
};

export interface WidgetOptions {
  crypto: string;
  fiat: string;
}

export default Configuration;
