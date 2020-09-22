const VueLoaderPlugin = require('vue-loader/lib/plugin')
// import path from 'path'
const path = require('path')

module.exports = {
  require: [
    path.join(__dirname, 'styleguide/global.requires.js'),
    './styleguide/material-icons.css'
  ],
  components: './src/components/**/[A-Z]*.vue',
  webpackConfig: {
    module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /(node_modules|pages)/,
          loader: 'vue-loader'
        },
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /(node_modules|pages)/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.(css|styl)$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: [
      // add vue-loader plugin
      new VueLoaderPlugin()
    ]
  }
}
