const path = require('path');
const { ConsoleRemotePlugin } = require('@openshift-console/dynamic-plugin-sdk-webpack');

const config = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  // No regular entry points. The remote container entry is handled by ConsoleRemotePlugin.
  entry: {},
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-chunk.js',
  },
  plugins: [
    new ConsoleRemotePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 9001,
    static: './dist',
    devMiddleware: {
      writeToDisk: true,
    },
    // Allow bridge running in a container to connect to the plugin dev server.
    allowedHosts: 'all',
    // Fix caching issues while developing
    headers: {
      'Cache-Control': 'no-store',
    },
    setupMiddlewares: (middlewares) => {
      // Add logger as first middleware to see all received request
      middlewares.unshift({
        name: 'log-requests',
        middleware: (req, res, next) => {
          console.log(new Date(), req.method, req.path);
          next();
        },
      });
      return middlewares;
    },
  },
};

module.exports = config;
