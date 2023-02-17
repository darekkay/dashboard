import React from "react";

import { Variants as Chart } from "../chart/__stories__/index.stories";
import { Variants as Counter } from "../counter/__stories__/index.stories";
import { Variants as Cryptocurrencies } from "../cryptocurrencies/__stories__/index.stories";
import { Variants as DateTime } from "../date-time/__stories__/index.stories";
import { Variants as DayCountdown } from "../day-countdown/__stories__/index.stories";
import { Variants as GithubStats } from "../github-stats/__stories__/index.stories";
import { Variants as Image } from "../image/__stories__/index.stories";
import { Variants as QrCode } from "../qr-code/__stories__/index.stories";
import { Variants as RandomImage } from "../random-image/__stories__/index.stories";
import { Variants as Search } from "../search/__stories__/index.stories";
import { Variants as Text } from "../text/__stories__/index.stories";
import { Variants as TotdChemicalElements } from "../totd-chemical-elements/__stories__/index.stories";
import { Variants as TotdWorldCountries } from "../totd-world-countries/__stories__/index.stories";
import { Variants as Weather } from "../weather/__stories__/index.stories";
import { Variants as Website } from "../website/__stories__/index.stories";
import { Variants as YoutubeStats } from "../youtube-stats/__stories__/index.stories";

export default {
  title: "Widgets",
};

export const Showcase = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="mb-4 text-4 font-bold">Widget showcase</h1>
      <Chart />
      <Counter />
      <Cryptocurrencies />
      <DateTime />
      <DayCountdown />
      <GithubStats />
      <Image />
      <QrCode />
      <RandomImage />
      <Search />
      <Text />
      <TotdChemicalElements />
      <TotdWorldCountries />
      <Weather />
      <Website />
      <YoutubeStats />
    </div>
  );
};
