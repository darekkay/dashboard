const commonConfig = require("@darekkay/scripts/src/config/jest.config");

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...commonConfig,

  preset: "ts-jest",

  coverageThreshold: {
    global: {
      statements: 90,
      branches: 80,
      functions: 80,
      lines: 90,
    },
  },

  coveragePathIgnorePatterns: [
    ...commonConfig.coveragePathIgnorePatterns,

    "src/api/routes*",
    "src/components/.*/selectors.ts",
    "src/common/utils/mock.tsx",
    "src/widgets/list.ts",
    "src/widgets/.*/properties.ts",
    "src/widgets/.*/configuration.tsx",
    "src/widgets/.*/sagas.ts",
  ],
};
