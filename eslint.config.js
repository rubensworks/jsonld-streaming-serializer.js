const config = require('@rubensworks/eslint-config');

module.exports = config([
  {
    files: [ '**/*.ts' ],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [ './tsconfig.eslint.json' ],
      },
    },
  },
  {
    ignores: [
      'node_modules',
      'coverage',
      '**/*.js',
      '**/*.d.ts',
      '**/*.js.map',
      '**/*.yml',
      '**/*.yaml',
      '**/*.md',
    ],
  },
]);
