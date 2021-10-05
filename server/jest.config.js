const commonConfig = require("@darekkay/scripts/src/config/jest.config");

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...commonConfig,

  preset: "ts-jest",

  coveragePathIgnorePatterns: [
    ...commonConfig.coveragePathIgnorePatterns,

    "src/index.ts",
    "src/config.ts",
    "src/axios.ts",
    "src/api/routes.ts",
  ],
};
