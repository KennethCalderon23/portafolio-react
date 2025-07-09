const path = require("path");

module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": path.resolve(__dirname, "__mocks__/fileMock.js")
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};
