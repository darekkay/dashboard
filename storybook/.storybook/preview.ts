// @ts-nocheck

import { addDecorator, addParameters } from "@storybook/react";

import initStore from "../../app/src/state/store";
import "../../app/src/common/i18n";

import "../../app/src/styles/index.scss";

// TODO: check if required, causes issues with vite-storybook
// import "../src/styles/index.scss";
import "./storybook.scss";

initStore();

// Define UI themes
export const parameters = {
  themes: {
    default: "Default",
    list: [
      {
        name: "Default",
        color: "#f5f7fb",
        class: "theme-default",
      },
      { name: "Dark", color: "#1c1c1c", class: "theme-dark" },
    ],
    onChange: (theme) => {
      const storybookIframe = document.getElementById(
        "storybook-preview-iframe"
      );
      const storybookIframeDocument =
        storybookIframe.contentDocument ||
        storybookIframe.contentWindow.document;

      storybookIframeDocument.body.dataset.theme =
        theme?.class.substring(6) || "default";
    },
  },
};
