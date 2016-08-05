// @file config.js
var path = require('path'); // 追記(watch)
var dest = './build'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src);  // 追記(watch)

var webpack = require('webpack');
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {

  // 出力先の指定
  dest: dest,
  // jsのビルド設定
  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },

  // webpackの設定
  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    module:  {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            cacheDirectory: true
          }
        },
        // { test: /\.js$/, include: [path.resolve(__dirname, 'src')], loader: 'babel' },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
        { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' }
      ]
    },
    plugins: [
      // new BrowserSyncPlugin({
      //   // browse to http://localhost:3000/ during development,
      //   // ./public directory is being served
      //   host: 'localhost',
      //   port: 3000,
      //   server: { baseDir: ['public'] }
      // }),
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
      })
    ]
  },

  // 追記部分
  copy: {
    src: [   // 今後ただコピーするファイルが増えそうなので配列にしておく
      src + '/www/index.html'
    ],
    dest: dest
  },

  // 追記部分
  stylus: {
    src: [  // もし外部のcssフレームワーク使うなら配列の先頭で読み込むと良い
      src + '/styl/**/!(_)*'  // ファイル名の先頭がアンスコはビルド対象外にする
    ],
    dest: dest + '/css/',
    output: 'app.css',  // 出力ファイル名
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  },

  watch: {
    js: relativeSrcPath + '/js/**',
    styl: relativeSrcPath + '/styl/**',
    www: relativeSrcPath + '/www/index.html'
  }

}
