// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: __dirname,
    extraFileExtensions: [".vue"],
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "plugin:vue/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'prettier/@typescript-eslint'
  ],
  plugins: [
    "@typescript-eslint"
  ],
  rules: {}
}
