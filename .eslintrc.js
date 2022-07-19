module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'spaced-comment': 'never',
        ignoreReadBeforeAssign: false,
        'prefer-const': true,
        eqeqeq: 'off',
        curly: 'error',
        'no-unused-vars': 'off',
        'prettier/prettier': ['error'],
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/valid-v-slot': [
            'error',
            {
                allowModifiers: true,
            },
        ],
    },
    globals: {
        _: true,
    },
}
