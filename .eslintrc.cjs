// @ts-check
const { defineConfig } = require('eslint-define-config')
// import { defineConfig } from 'eslint-define-config'

module.exports = defineConfig({
  root: true,
  env: { browser: true, node: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { printWidth: 120 }],
    'react-refresh/only-export-components': 'warn',

    //ts
    // 不允许使用require语句
    '@typescript-eslint/no-var-requires': 'off'
  }
})
