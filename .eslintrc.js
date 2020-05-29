module.exports = {
    /* your base configuration of choice */
    rules: {
      // A temporary hack related to IDE not resolving correct package.json
      "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    plugins: ["@typescript-eslint"],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true,
      node: true
    },
    globals: {
      __static: true
    }
  }