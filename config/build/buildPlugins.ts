import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// @ts-ignore
import ReactRefreshWebpackPlugin from 'react-refresh-webpack-plugin';
import { type BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:4].css',
            chunkFilename: 'css/[name].[contenthash:4].css',
        }),

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        // plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
