// @ts-nocheck

import { resolve } from "path";

/** @type {import("@storybook/core-common").StorybookConfig} */
export default {
  core: {
    disableTelemetry: true,
  },
  stories: ["../../app/src/**/__stories__/*.stories.tsx"],

  addons: ["storybook-addon-themes"],

  staticDirs: ["../../app/public", "./assets"],

  features: {
    postcss: false,
  },

  typescript: {
    // https://github.com/storybookjs/storybook/issues/12585
    check: false,
    reactDocgen: false,
  },

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config, { configType }) {
    config.resolve = {
      alias: config.resolve.alias.concat(
        [
          "api",
          "common",
          "components",
          "entry",
          "state",
          "styles",
          "templates",
          "widgets",
        ].map((folder) => ({
          find: RegExp(`^${folder}`),
          replacement: resolve(__dirname, `../../app/src/${folder}`),
        }))
      ),
    };
    return config;
  },
};
