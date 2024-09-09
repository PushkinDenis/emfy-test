import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': fixupPluginRules(eslintReactHooks),
      'jsx-a11y': jsxA11y,
      import: eslintImport,
    },
  },
  {
    ignores: ['node_modules', 'build', 'src/custom.d.ts', 'vite.config.ts'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: 'tsconfig.eslint.json',
      },
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      ...eslintReact.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...eslintConfigPrettier.rules,

      // TypeScript rules
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/unified-signatures': 'error',

      // Import rules
      'import/export': 'error',
      'import/no-cycle': 'error',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/no-self-import': 'error',

      // React rules
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'error',
      'react/no-unused-prop-types': 'warn',

      // React hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // Accessibility rules
      'jsx-a11y/anchor-has-content': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/iframe-has-title': 'off',

      // General rules
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-redeclare': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      curly: 'error',
      'dot-notation': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'id-denylist': ['error', 'any', 'Number', 'String', 'Boolean', 'Undefined'],
      'max-classes-per-file': ['error', 1],
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-return-await': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'error',
      'no-unused-expressions': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      'prefer-spread': 'error',
      'prefer-object-spread': 'error',
      'no-param-reassign': 'error',
      radix: 'error',
    },
  },
);
