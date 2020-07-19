import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Dropdown from "components/forms/dropdown";
import Link from "components/link";

const Configuration = ({ options, setOptions }: ConfigurationProps<Props>) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Supported currencies: https://www.coingecko.com/api/documentations/v3 */}
      <Dropdown
        label={t("widget.cryptocurrencies.configuration.fiat")}
        className="mb-6"
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
      ></Dropdown>
      <Dropdown
        label={t("widget.cryptocurrencies.configuration.crypto")}
        className="mb-6"
        value={options.crypto}
        setValue={(value) => setOptions({ crypto: value })}
        getOptionLabel={(option) =>
          t(`widget.cryptocurrencies.crypto.${option}`)
        }
        options={[
          "bitcoin",
          "bitcoin-cash",
          "dash",
          "eos",
          "ethereum",
          "link",
          "litecoin",
          "monero",
          "ripple",
          "stellar",
          "tether",
          "tezos",
          "zcash",
        ]}
      />
      <div className="text-right text-1">
        <Trans i18nKey="common.poweredBy">
          <Link href="https://www.coingecko.com/">{{ name: "CoinGecko" }}</Link>
        </Trans>
      </div>
    </>
  );
};

export interface Props {
  crypto: string;
  fiat: string;
}

export default Configuration;
