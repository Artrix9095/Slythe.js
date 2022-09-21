module.exports = {
  extends: '../../.eslintrc.js',
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      overrides: [],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  ],
};
