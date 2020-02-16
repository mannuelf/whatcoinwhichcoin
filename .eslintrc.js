module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    "no-useless-escape": 0,
    "no-console": 0
  }
}
