const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = function(env, argv) {
  return {
    // mode: 'production',
    mode: 'development',
    entry: {
      // main: './src/index.js',
      // main: './src/main.js',
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
      // main: './src/tree-sharking.js',
      // main: './src/lazy.js',
      main: './src/main.ts'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      // filename: 'somepackage.js',
      // library: {
      //   name: 'thepackage',
      //   type: 'umd',
      // },
      // filename: 'entry...[chunkhash:4]...[contenthash:4]...[name].js',
      filename: 'entry.[name].js',
      chunkFilename: 'chunk.[name].js',
      // assetModuleFilename: 'asset.[fullhash:8][ext][query]',
      clean: true,
      // trustedTypes: {
      //   policyName: 'pname'
      // },
    },
    // externals: {
    //   lodash: {
    //     commonjs: 'lodash',
    //     commonjs2: 'lodash',
    //     amd: 'lodash',
    //     root: '_',
    //   }
    // },
    // experiments: {
    //   outputModule: true,
    // },
    optimization: {
      // usedExports: true,
      // sideEffects: true,
      // minimize: false,
    //   // moduleIds: 'deterministic',
    //   runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        // cacheGroups: {
        //   vendor: {
        //     test: /[\\/]node_modules[\\/]/,
        //     name: 'vendors',
        //     chunks: 'all',
        //   },
        // },
      }
    },
    // devtool: 'source-map',
    devServer: {
      hot: true,
      port: 4000,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({}),
      new HtmlWebpackPlugin({
        title: 'Output',
        template: './public/index.html',
        inject: 'body',
        publicPath: './',
        // hash: true,
        // excludeChunks: ['print']
        // favicon: './src/favicon.png'
      }),
      // new WorkboxPlugin.GenerateSW({
      //   clientsClaim: true,
      //   skipWaiting: true,
      // }),
      // new webpack.ProvidePlugin({
      //   // _: 'lodash',
      //   join: ['lodash', 'join']
      // })
      // new WebpackManifestPlugin({
      //   publicPath: './'
      // }),
      // new webpack.ProgressPlugin((pert, msg, ...args) => {
      //   console.info(pert);
      // }),
    ],
    module: {
      rules: [
        {
          test: /\.ts$/i,
          use: ['ts-loader']
        },
        {
          test: /\.png/i,
          // type: 'asset/resource',
          // type: 'asset/inline',
          // type: 'asset/source',
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 21 * 1024,
            }
          }
        },
        // {
        //   test: require.resolve('./src/print.js'),
        //   use: [
        //     {
        //       loader: 'imports-loader',
        //       options: {
        //         wrapper: 'window'
        //       }
        //     }
        //   ],
        // },
        // {
        //   test: require.resolve('./src/global.js'),
        //   use: [
        //     {
        //       loader: 'exports-loader',
        //       options: {
        //         type: 'commonjs',
        //         exports: ['file', 'multiple helpers.parse parse']
        //       }
        //     }
        //   ]
        // },
        // {
        //   test: /\.js$/i,
        //   include: path.resolve(__dirname, 'src/main.js'),
        //   use: [
        //     {
        //       loader: './loaders/msg-loader.js?{"name": "huhuhu", "age": 17}',
        //       // options: {
        //       //   title: 'message',
        //       //   content: 'some infomation',
        //       // },
        //     }, 
        //     // './loaders/msg-loader.js',
        //     './loaders/addtion-loader.js'
        //   ],
        //   // loader: './loaders/msg-loader.js',
        //   // options: {
        //   //   common: 'ohhhhhhh'
        //   // }.,
        // },
        // {
        //   test: /\.png$/i,
        //   use: ['./loaders/raw-loader.js']
        // }
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
  }
};