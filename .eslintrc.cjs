const { configure, presets } = require('eslint-kit')

module.exports = configure({
  presets: [
    presets.imports({
      sort: { newline: true },
    }),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
  ],
  extend: {
    rules: {
      'unicorn/prevent-abbreviations': 'off',
    },
  },
})
