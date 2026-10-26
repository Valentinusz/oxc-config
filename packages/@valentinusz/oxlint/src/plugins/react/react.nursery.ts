import type { OxlintConfig } from 'oxlint';

export const reactNursery = {
  rules: {
    // ❌ react/require-render-return
    // Require render methods in ES5 and ES2015 React components to return a value.
    // ➡️ Handled by react/prefer-function-component.
  },
} satisfies OxlintConfig;
