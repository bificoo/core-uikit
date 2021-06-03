module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            fragment: 'Fragment',
            version: 'detect',
        },
        propWrapperFunctions: [
            'forbidExtraProps',
            { property: 'freeze', object: 'Object' },
            { property: 'myFavoriteWrapper' },
        ],
        componentWrapperFunctions: [
            'observer',
            { property: 'styled' },
            { property: 'observer', object: 'Mobx' },
            { property: 'observer', object: '<pragma>' },
        ],
        linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'jest', '@typescript-eslint', 'prettier'],
    rules: {
        'no-undef': ['error'],
        'no-var': ['error'],
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
}
