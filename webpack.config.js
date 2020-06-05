const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./app/app.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  modules: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.(js)$/, loader: 'eslint-loader' }
    ]
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  plugins: [
    new htmlPlugin({
      template: 'app/public/index.html'
    })
  ]
}