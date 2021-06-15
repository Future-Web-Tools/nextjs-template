
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.js(x?)$/,
      exclude: /node_modules/,
      use: {
        loader: 'eslint-loader',
        options: {
          fix: true
          //  emitWarning: dev,
        }
      }
    })

    return config
  }
}
