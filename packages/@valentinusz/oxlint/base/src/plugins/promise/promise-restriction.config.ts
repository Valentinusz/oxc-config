import type { OxlintConfig } from 'oxlint';

export const promiseRestrictionConfig = {
  rules: {
    // ✅ promise/catch-or-return
    // Ensure that each time a then() is applied to a promise, a catch() must be applied as well (or the promise is
    // returned).
    // Not catching errors in a promise can cause hard to debug problems or missing handling of error conditions.
    'promise/catch-or-return': 'error',

    // ✅ promise/spec-only
    // Disallow use of non-standard Promise static methods.
    // These methods are not standard and often are not even available.
    'promise/spec-only': 'error',
  },
} satisfies OxlintConfig;
