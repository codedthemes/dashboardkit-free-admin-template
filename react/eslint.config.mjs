import { fixupConfigRules } from '@eslint/compat';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...fixupConfigRules(
    compat.extends('prettier', 'plugin:react/jsx-runtime', 'plugin:jsx-a11y/recommended', 'eslint:recommended', 'plugin:react/recommended')
  ),
  {
    plugins: {
      prettier,
      'react-hooks': reactHooks
    },

    languageOptions: {
      globals: {
        ...globals.browser
      },

      ecmaVersion: 2020,
      sourceType: 'module',

      parserOptions: {
        requireConfigFile: false,

        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          impliedStrict: true,
          jsx: true
        }
      }
    },

    settings: {
      react: {
        createClass: 'createReactClass',
        pragma: 'React',
        fragment: 'Fragment',
        version: 'detect',
        flowVersion: '0.53'
      },

      'import/resolver': {
        node: {
          moduleDirectory: ['node_modules', 'src/']
        }
      }
    },

    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-undef': 'off',
      'react/display-name': 'off',
      'react/jsx-filename-extension': 'off',
      'no-param-reassign': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/no-array-index-key': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/forbid-prop-types': 'off',
      'import/order': 'off',
      'import/no-cycle': 'off',
      'no-console': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/label-has-for': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'prefer-destructuring': 'off',
      'no-shadow': 'off',
      'import/no-named-as-default': 'off',
      'import/no-extraneous-dependencies': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',

      'no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: false
        }
      ],

      'prettier/prettier': [
        'warn',
        {
          bracketSpacing: true,
          printWidth: 140,
          singleQuote: true,
          trailingComma: 'none',
          tabWidth: 2,
          useTabs: false,
          endOfLine: 'auto'
        }
      ]
    }
  }
];
