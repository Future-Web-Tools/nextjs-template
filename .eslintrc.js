module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  extends: [
    'standard',
    'standard-jsx'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    'react/no-children-prop': 0,
    'react/jsx-closing-tag-location': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-async-promise-executor': 0,
    'no-useless-escape': 0
  },
  globals: {
    fetch: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
