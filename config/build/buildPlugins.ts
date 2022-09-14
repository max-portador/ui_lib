import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {type BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[]{
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
           filename: 'css/[name].[contenthash:4].css',
           chunkFilename: 'css/[name].[contenthash:4].css',
        })
    ]
}