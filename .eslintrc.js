module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/react',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'arrow-parens': 0,
    camelcase: 0,
    'consistent-return': 0,
    'jsx-no-multiline-js': 0,
    'jsx-no-lambda': 0,
    'import-name': 0,
    'no-boolean-literal-compare': 0,
    'jsx-boolean-value': 0,
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
    ],
    'object-curly-spacing': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'linebreak-style': 0,
    'brace-style': 0,
    'array-bracket-spacing': 0,
    quotes: 0,
    'no-continue': 0,
    'no-break': 0,
    'no-trailing-spaces': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'no-plusplus': 0,
    'no-unused-expressions': 0,
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'import/extensions': [
      2,
      { extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'] },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/__tests__/**', '**/tests/**', '**/setupTests.ts'],
      },
    ],
    'implicit-arrow-linebreak': 0,
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'no-restricted-syntax': 0,
    'react/prop-types': 0,
    'react/state-in-constructor': [2, 'never'],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/camelcase': [
      0,
      {
        properties: 'never',
        ignoreDestructuring: true,
      },
    ],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['error'],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
