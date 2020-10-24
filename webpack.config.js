const { webpackConfig } = require("./webpack.plugin");

module.exports = webpackConfig("catalog", (defaultConfig) => {
  return {
    ...defaultConfig,
    entry: {
      index: "./src/index.tsx",
      ...(defaultConfig.mode === "production"
        ? {}
        : { preview: "./src/preview.tsx" }),
    },
  };
});
