import type { OxlintConfig } from 'oxlint';

export const reactNursery = {
  rules: {
    // ❌ react/react-compiler
    // Runs the React Compiler's analysis in lint-only mode and reports code that violates the Rules of React.
    // 📁 Project specific. Turn this on if you are using the React Compiler.
    // ❌ react/require-render-return
    // Require render methods in ES5 and ES2015 React components to return a value.
    // ➡️ Handled by react/prefer-function-component.
  },
} satisfies OxlintConfig;
