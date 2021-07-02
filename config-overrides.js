// const rewireEntry = require("rewire-entry")({
//   entry: ["desktop.tsx", "touch.tsx"],
// })

module.exports = {
  webpack: (config, env) => {
    config.output = {
      ...config.output, // copy all settings
      filename: "static/js/[name].js",
      chunkFilename: "static/js/[name].chunk.js",
    }
    return config
  },
}
