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
    files: [ '**/*.ts' ],
    rules: {
      // Requires strictNullChecks which is not enabled in this project
      'ts/prefer-nullish-coalescing': 'off',
      // Util is a valid utility class with only static members
      'ts/no-extraneous-class': 'off',
      // Node.js built-in imports are acceptable
      'import/no-nodejs-modules': 'off',
      // Default object parameter is used intentionally
      'unicorn/no-object-as-default-parameter': 'off',
      // _transform and _flush are required by the Node.js Transform stream API
      'ts/naming-convention': [
        'error',
        {
          selector: 'default',
          format: [ 'camelCase' ],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'import',
          format: null,
        },
        {
          selector: 'variable',
          format: [ 'camelCase', 'UPPER_CASE' ],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'classProperty',
          format: [ 'camelCase', 'UPPER_CASE' ],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'typeLike',
          format: [ 'PascalCase' ],
        },
        {
          selector: [ 'typeParameter' ],
          format: [ 'PascalCase' ],
          prefix: [ 'T' ],
        },
        {
          selector: 'interface',
          format: [ 'PascalCase' ],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
        {
          // Allow JSON-LD keyword properties (@id, @type, etc.) and URI properties (http://...)
          selector: 'objectLiteralProperty',
          format: null,
          filter: {
            regex: '[/:@]',
            match: true,
          },
        },
      ],
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
