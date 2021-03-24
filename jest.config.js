/* eslint-env node */
module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jsdom",
};
