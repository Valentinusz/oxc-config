import type { OxlintConfig } from 'oxlint';

export const promiseNursery = {
  rules: {
    // ✅ promise/no-return-in-finally
    // Disallow return statements in a finally() callback of a promise.
    // 🐛 Bug prevention.
    'promise/no-return-in-finally': 'error',
  },
} satisfies OxlintConfig;
