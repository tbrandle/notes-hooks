const path = require("path");

module.exports = {
  webpack: {
      alias: {
        "context": path.resolve(__dirname, "src/context"),
        "atoms": path.resolve(__dirname, "src/atoms"),
        "molecules": path.resolve(__dirname, "src/molecules"),
        "environments": path.resolve(__dirname, "src/environments"),
        "organisms": path.resolve(__dirname, "src/organisms"),
        "helpers": path.resolve(__dirname, "src/helpers"),
      }
  }
};