const path = require('path');

module.exports = {
    entry: './src/components/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext]',
        clean: true,
    },
    module: {
        rules: [
            {test: /\.css$/, use: 'css-loader'},
            {
                test: /\.tsx?$/, use: {
                    loader: "ts-loader",
                    options: {
                        // transpileOnly: true,
                        configFile: "tsconfig.json"
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.png']
    },
};