var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
      'fullscreen-js': './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: require.resolve('babel-loader'),
                options: {
                    cacheDirectory: true,
                    plugins: [
                      'babel-plugin-transform-object-rest-spread',
                      'babel-plugin-transform-class-properties',
                      'babel-plugin-transform-runtime'
                    ],
                    presets: [
                        'babel-preset-es2015'
                    ]
                }
            }
        ]
    }
}
