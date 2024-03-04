module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript',
    'taro/react',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'scripts/*', 'config/*'],
  plugins: ['react', 'react-hooks', '@typescript-eslint/eslint-plugin'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off'
  }
}
