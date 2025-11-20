export default {
  testEnvironment: "node",
  coverageReporters: ["lcov"],
  roots: ["<rootDir>/test"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
