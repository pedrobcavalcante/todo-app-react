module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'react-app',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'prettier/prettier': 'error'
    }
  };
  