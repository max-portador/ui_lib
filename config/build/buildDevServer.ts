import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true, // автоматически открывать страницу в браузере после сборки
        historyApiFallback: true, // позволяет проксировать запросы через index.html,
        hot: true
    }
}