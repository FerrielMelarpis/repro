module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        // https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
        'eslint:recommended',
        // https://github.com/vuejs/eslint-plugin-vue#gear-configs
        'plugin:vue/base',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
    ],
    // required to lint *.vue files
    plugins: [
        'html',
        'import'
    ],
    globals: {
        'cordova': true,
        'DEV': true,
        'PROD': true,
        '__THEME': true
    },
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        'one-var': 0,
        'import/first': 0,
        'import/named': 2,
        'import/namespace': 2,
        'import/default': 2,
        'import/export': 2,
        // allow console and debugger during development
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }]
    }
};
