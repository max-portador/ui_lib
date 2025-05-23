module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        // 'cypress/globals': true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'prettier',
        // 'plugin:cypress/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'eslint-plugin-react-hooks',
        'portador',
        'unused-imports',
    ],
    rules: {
        'unused-imports/no-unused-imports': 'warn',
        'alpha-value-notation': 'off',
        'color-function-notation': 'off',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/jsx-props-no-spreading': 'warn',
        'react/no-array-index-key': 'warn',
        'react/function-component-definition': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'no-shadow': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'import/no-extraneous-dependencies': 'off',
        'react/require-default-props': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'linebreak-style': ['error', 'unix'],
        'arrow-body-style': 'off',
        'no-undef': 'off',
        'no-param-reassign': 'off',
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'react/no-unstable-nested-components': 1,
        'import/no-import-module-exports': [
            'error',
            {
                exceptions: ['**/config/storybook/*.js'],
            },
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'as',
                    'role',
                    'data-testid',
                    'to',
                    'target',
                    'color',
                ],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 125 }],
        // 'portador/path-checker': ['error', { alias: '@' }],
        // 'portador/public-api-imports': [
        //     'error',
        //     {
        //         alias: '@',
        //         testFilesPatterns: [
        //             '**/.test.*',
        //             '**/*.story.*',
        //             '**/StoreDecorator.tsx',
        //         ],
        //     },
        // ],
        // 'portador/layer-imports': [
        //     'error',
        //     {
        //         alias: '@',
        //         ignoreImportPatterns: [
        //             '**/StoreProvider',
        //             '**/styles/index.scss',
        //             '**/examples/**',
        //             '**/testing',
        //         ],
        //     },
        // ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: [
                '**/src/**/*.{test,stories}.{ts,tsx}',
                '**/src/**/examples/*.{ts,tsx}',
            ],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
