const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.js', '.jsx'],
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
        ],
    },
};
