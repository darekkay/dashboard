import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

import "components/icon/font-awesome/setup"; // Font Awesome setup

import initStore from "state/store";
import "common/i18n";

import "../src/styles/index.scss";
import "./storybook.scss";

initStore();

// Enable a11y addon
addDecorator(withA11y);

// Define UI themes
addParameters({
  themes: [
    {
      name: "Default",
      color: "#f5f7fb",
      class: "theme-default",
      default: true
    },
    { name: "Dark", color: "#1c1c1c", class: "theme-dark" }
  ]
});
