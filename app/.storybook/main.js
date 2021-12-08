const path = require("path");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

/** @type {import("@storybook/core-common").StorybookConfig} */
module.exports = {
  stories: ["../src/**/__stories__/*.stories.tsx"],

  addons: ["storybook-addon-themes"],

  staticDirs: ["../public", "./assets"],

  features: {
    postcss: false,
  },

  typescript: {
    // https://github.com/storybookjs/storybook/issues/12585
    check: false,
    reactDocgen: false,
  },

  /**
   * Storybook Webpack customization
   * @param config Webpack config
   * @param configType DEVELOPMENT or PRODUCTION
   */
  webpackFinal: async (config, { configType }) => {
    // SASS loader
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // resolve TS aliases
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    // Return the altered config
    return config;
  },
};
