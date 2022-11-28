module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: 0,
    // 'comma-dangle': [2, 'always-multiline'],
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
  },
};
