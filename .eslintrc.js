module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
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
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [
            2, { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'no-shadow': 'off',
        indent: [2, 4],
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'import/no-extraneous-dependencies': 'off',
        'react/require-default-props': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'linebreak-style': [
            'error',
            'unix',
        ],
        'no-param-reassign': 'off',
        'import/no-import-module-exports': ['error', {
            exceptions: ['**/config/storybook/*.js'],
        }],
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid'],
        }],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
