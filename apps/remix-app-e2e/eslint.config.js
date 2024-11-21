// biome-ignore lint/nursery/noCommonJs: <explanation>
const playwright = require('eslint-plugin-playwright')
// biome-ignore lint/nursery/noCommonJs: <explanation>
const baseConfig = require('../../eslint.config.js')

// biome-ignore lint/nursery/noCommonJs: <explanation>
module.exports = [
  playwright.configs['flat/recommended'],

  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.js'],
    // Override or add rules here
    rules: {},
  },
]
