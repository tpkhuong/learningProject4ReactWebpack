var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    /*without additional settings, this will reference .babelrc*/
                    loader: "babel-loader"
                }
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist"
    }
}