module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // indent: ['error'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'never'],
    // 'comma-dangle': ['error', 'always-multiline'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
  },
}
