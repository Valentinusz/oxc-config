import type { OxlintConfig } from 'oxlint';

export const reactNurseryConfig = {
  rules: {
    // ❌ react/react-compiler
    // Runs the React Compiler's analysis in lint-only mode and reports code that violates the Rules of React.
    // Experimental.
    // ❌ react/require-render-return
    // Require render methods in ES5 and ES2015 React components to return a value.
    // Class components are forbidden.
  },
} satisfies OxlintConfig;
