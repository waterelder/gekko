const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: {
    cache: true,
    plugins: [
      new CopyWebpackPlugin([
        {
          from: '../baseUIconfig.js',
          to: '../public/UIconfig.js'
        },
        {
          from: '../baseUIconfig.js',
          to: 'UIconfig.js'
        },
      ])
    ]
  },
  baseUrl: ''
}
