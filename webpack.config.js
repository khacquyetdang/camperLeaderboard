var path = require("path");

module.exports = {
    entry: {
      index: [
            'webpack-dev-server/client?http://localhost:8080',
            './src/index.js'
          ]
    },
    output: {
      path: path.resolve(__dirname, "public"),
      publicPath: 'public',
      filename: '[name].js'
    },

    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              loader: ['react-hot-loader', 'jsx-loader', 'babel-loader'],
              exclude: /node_modules/
            },
            {
                test: /\.sass$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
