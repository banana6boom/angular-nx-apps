module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  customSyntax: 'postcss-scss',
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
    'stylelint-prettier',
    'stylelint-color-format',
    'stylelint-high-performance-animation',
  ],
  rules: {
    'plugin/no-low-performance-animation-properties': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
