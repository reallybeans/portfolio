module.exports = {
  reactStrictMode: true,
  loaders: [{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }],
}
