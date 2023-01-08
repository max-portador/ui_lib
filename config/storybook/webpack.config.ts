import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { buildSvgLoaders } from '../build/loaders/buildSvgLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
        buildLocales: path.resolve(__dirname, '..', '..', 'build', 'locales'),
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    // eslint-disable-next-line no-param-reassign
    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module!.rules.push(buildSvgLoaders());
    config.module!.rules.push(buildCssLoaders(true));

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
