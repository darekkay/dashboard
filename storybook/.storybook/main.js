const path = require("path");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

/** @type {import("@storybook/core-common").StorybookConfig} */
module.exports = {
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

  core: {
    disableTelemetry: true,
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
      include: [
        path.resolve(__dirname, "../../app/src"),
        path.resolve(__dirname, "storybook.scss"),
      ],
    });

    // resolve TS aliases
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../../app/tsconfig.json"),
        extensions: config.resolve.extensions,
      }),
    ];

    // Fix wrong project root on server
    // Storybook treats the nearest ".git" folder as its project root. However, on a server that splits the Git repository from the working directory, this leads to a wrong project root.
    // https://github.com/storybookjs/storybook/blob/next/lib/core-common/src/utils/paths.ts

    const babelLoaderRule = config.module.rules.find(
      // https://github.com/storybookjs/storybook/blob/next/lib/builder-webpack4/src/preview/babel-loader-preview.ts
      (rule) => rule.test.toString() === /\.(mjs|tsx?|jsx?)$/.toString()
    );
    // set correct project root
    babelLoaderRule.include = [path.resolve(__dirname, "../..")];

    // Return the altered config
    return config;
  },
};
