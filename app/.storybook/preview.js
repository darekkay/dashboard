import { addDecorator, addParameters } from "@storybook/react";

import initStore from "state/store";
import "common/i18n";

import "../src/styles/index.scss";
import "./storybook.scss";

initStore();

// Define UI themes
addParameters({
  themes: [
    {
      name: "Default",
      color: "#f5f7fb",
      class: "theme-default",
      default: true,
    },
    { name: "Dark", color: "#1c1c1c", class: "theme-dark" },
  ],
});
