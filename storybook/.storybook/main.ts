// @ts-nocheck

/** @type {import("@storybook/core-common").StorybookConfig} */
module.exports = {
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

  docs: {
    // TODO: check
    autodocs: true,
  },
};
