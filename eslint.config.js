import vueParser from 'vue-eslint-parser'
import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginTS from '@typescript-eslint/eslint-plugin'
import parserTS from '@typescript-eslint/parser'
import nuxtPlugin from 'eslint-plugin-nuxt'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ['node_modules', '.output', '.nuxt', 'dist'],
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: parserTS,
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      vue: eslintPluginVue,
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTS,
      nuxt: nuxtPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: parserTS,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTS,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
]
