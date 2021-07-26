const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: {
    // main: './src/index.js',
    main: './src/main.js',
    // print: './src/print.js',
    // index: {
    //   import: './src/start.js',
    //   // dependOn: 'shared',
    // },
    // another: {
      // import: './src/another.js',
      // dependOn: 'shared',
    // },
    // shared: './src/lodash.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'somepackage.js',
    library: {
      name: 'thepackage',
      type: 'umd',
    },
    // filename: 'entry...[chunkhash:4]...[contenthash:4]...[name].js',
    // chunkFilename: 'chunk.[chunkhash:4].[contenthash:4].[name].js',
    // assetModuleFilename: 'asset.[fullhash:8][ext][query]',
    clean: true,
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    }
  },
  // experiments: {
  //   outputModule: true,
  // },
  // optimization: {
  //   // moduleIds: 'deterministic',
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   }
  // },
  // devtool: 'source-map',
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Output',
    //   template: './public/index.html',
    //   inject: 'body',
    //   publicPath: './',
    //   // hash: true,
    //   // excludeChunks: ['print']
    //   // favicon: './src/favicon.png'
    // }),
    // new WebpackManifestPlugin({
    //   publicPath: './'
    // }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg)$/i,
      //   type: 'asset/resource'
      // },
      // {
      //   test: /\.csv$/i,
      //   use: ['csv-loader']
      // },
      // {
      //   test: /\.xml$/i,
      //   use: ['xml-loader']
      // },
      // {
      //   test: /\.yaml$/i,
      //   type: 'json',
      //   parser: {
      //     parse: yaml.parse
      //   }
      // },
      // {
      //   test: /\.toml$/i,
      //   type: 'json',
      //   parser: {
      //     parse: toml.parse
      //   }
      // },
      // {
      //   test: /\.json5$/i,
      //   type: 'json',
      //   parser: {
      //     parse: json5.parse
      //   }
      // },
    ]
  }
};