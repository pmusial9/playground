const path = require('path');

module.exports = {
    mode: 'development',
    entry: './source/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    resolve: {
        extensions: ['.tsx', '.js', '.jsx', '.scss', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx|\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'babel-loader',
                ],
            },
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.css$/,
                loader: 'style-loader',
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                },
            },

        ],
    },
};
