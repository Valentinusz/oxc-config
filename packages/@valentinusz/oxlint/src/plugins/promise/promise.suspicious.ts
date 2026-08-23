import type { OxlintConfig } from 'oxlint';

export const promiseSuspicious = {
  rules: {
    // ✅ promise/always-return
    // Require returning inside each then() to create readable and reusable Promise chains.
    // 🐛 Bug prevention.
    'promise/always-return': 'error',

    // ✅ promise/no-multiple-resolved
    // Warns when a Promise executor resolves multiple times along different code paths.
    // 🐛 Bug prevention.
    'promise/no-multiple-resolved': 'error',

    // ✅ promise/no-promise-in-callback
    // Disallows the use of Promises within error-first callback functions.
    // 🐛 Bug prevention.
    'promise/no-promise-in-callback': 'error',
  },
} satisfies OxlintConfig;
