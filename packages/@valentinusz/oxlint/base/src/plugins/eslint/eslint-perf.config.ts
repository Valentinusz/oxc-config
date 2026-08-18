import type { OxlintConfig } from 'oxlint';

export const eslintPerfConfig = {
  rules: {
    // ✅ eslint/no-await-in-loop
    // Disallows the use of await within loop bodies. (for, for-in, for-of, while, do-while).
    // 🏆 Best practice. Potentially indicates that the async operations are not being effectively parallelized.
    'eslint/no-await-in-loop': 'error',

    // ✅ eslint/no-useless-call
    // Disallow unnecessary .call() and .apply() methods.
    // 🏆 Best practice. Said methods are slower than just direct calls.
    'eslint/no-useless-call': 'error',
  },
} satisfies OxlintConfig;
