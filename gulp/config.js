// @file config.js
var path = require('path'); // 追記(watch)
var dest = './build'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src);  // 追記(watch)

var webpack = require('webpack');
var BowerWebpackPlugin = require("bower-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {

  // 出力先の指定
  dest: dest,
  // jsのビルド設定
  js: {
    src: src + '/scripts/**',
    dest: dest + '/scripts',
    uglify: false
  },

  // webpackの設定
  webpack: {
    watch: true,
    entry: src + '/scripts/app.js',
    output: {
      filename: 'app.js'
    },
    resolve: {
      extensions: ['', '.js', '.styl']
    },
    module:  {
      noParse: /es6-promise\.js$/,
      loaders: [
        { test: /\.vue$/, loader: 'vue' },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
        { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
        { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' },
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            cacheDirectory: true
          }
        }
      ]
    },
    plugins: [
      new BowerWebpackPlugin({
        modulesDirectories: ["bower_components"],
        manifestFiles:      "bower.json",
        includes:           /.*/,
        excludes:           /.*\.less/,
        searchResolveModulesDirectories: true
      }),
      new webpack.ProvidePlugin({
        $:      "jquery",
        jQuery: "jquery"
      }),
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        files: "./build/**/*",
        server: {
          "baseDir": "./build",
          "middleware": function(req, res, next){
            var timestamp = "[" + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + "] ";
            console.log(timestamp + req.method + " " + req.originalUrl + " - " +  req.connection.remoteAddress + " - " + req.headers['user-agent']);
            next();
          }
        }
      })
    ]
  },


  // 追記部分
  copy: {
    src: [   // 今後ただコピーするファイルが増えそうなので配列にしておく
      src + '/favicon.ico',
      // src + '/www/index.html',
      // src + '/www/3.html',
      // src + '/www/7.html'
      src + '/www/**'
    ],
    dest: dest
  },

  watch: {
    js: relativeSrcPath + '/scripts/**',
    styl: relativeSrcPath + '/styl/**',
    www: relativeSrcPath + '/www/**'
  }

}
