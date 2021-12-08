// @ts-nocheck

import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-tsconfig-paths'

const { resolve } = require("path");


// TODO: change to TS - https://github.com/storybookjs/builder-vite#typescript

/** @type {import("@storybook/core-common").StorybookConfig} */
module.exports = {
  core: {
    builder: "@storybook/builder-vite",
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

  async viteFinal(config, { configType }) {
    config.plugins = [...config.plugins, svgr(), tsconfigPaths({ root: "../app"})];
    config.resolve = {
      alias: [
        {
          find: /^~@darekkay\/styles/,
          replacement: resolve(__dirname, "../../app/node_modules/@darekkay/styles"),
        },
      ],
    };
    return config;
  },
};
