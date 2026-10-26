import type { OxlintConfig } from 'oxlint';

export const eslintCorrectness = {
  rules: {
    // ✅ eslint/no-unused-vars
    // Disallow unused variables.
    // 📁 Project specific. An underscore-prefixed parameter is intentionally unused.
    'eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
} satisfies OxlintConfig;
