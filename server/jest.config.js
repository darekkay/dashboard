module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  roots: ["<rootDir>/src"],

  // TODO: improve test coverage
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 60,
      functions: 65,
      lines: 75,
    },
  },
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!**/node_modules/**"],
};
