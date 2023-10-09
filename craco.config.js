// craco.config.js
const { resolve } = require("path");

module.exports = {
  webpack: {
    alias: {
      "react-router-dom": resolve(__dirname, "./node_modules/@tanstack/router"),
    },
  },
};