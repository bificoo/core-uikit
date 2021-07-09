module.exports = {
  webpack: (config, env) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    }

    config.output = {
      ...config.output, // copy all settings
      filename: "static/js/[name].js",
      chunkFilename: "static/js/[name].chunk.js",
    }
    return config
  },
}
