module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFiles: ["<rootDir>/.jest/env.js"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "#(.*)": "<rootDir>/node_modules/$1",
    "@libs/(.*)": "<rootDir>",
    "@functions/(.*)": "<rootDir>",
  },
  modulePaths: ["<rootDir>"],
};
