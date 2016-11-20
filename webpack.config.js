var combineLoaders = require('webpack-combine-loaders');

module.exports = {
  // Use babel-regenerator-runtime in order to use ES7 async await with webpack
  // see http://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined-with-async-await
  entry: ['babel-regenerator-runtime', './app/index.js'],
  // entry: './app/index.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  // webpack-dev-server
  devServer: {
    inline: true, // auto refresh
    port: 9000
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0'
          ]
        }
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
        ])
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          // 'resolve-url',
          'sass?sourceMap'
        ]
      }
    ]
  }
  // ALTERNATIVE: Not tested yet
  // module: {
  //   loaders: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: 'babel',
  //       query: {
  //         presets: [
  //           'react',
  //           'es2015',
  //           'stage-0'
  //         ]
  //       }
  //     },
  //     {
  //       test: /\.jsx?$/,
  //       loaders: ['react-hot', 'babel'],
  //       exclude: /node_modules/
  //     },
  //     {
  //       test: /\.css$/,
  //       loaders: ['style', 'css?sourceMap', 'resolve-url']
  //     },
  //     {
  //       test: /\.scss$/,
  //       loaders: [ 'style', 'resolve-url', 'css?sourceMap', 'sass?sourceMap' ]
  //     }
  //   ]
  // }
};
