import type { OxlintConfig } from 'oxlint';

export const promiseStyle = {
  rules: {
    // ✅ promise/avoid-new
    // Disallow creating promises with new Promise().
    // 🏆 Best practice. async/await is preferred.
    'promise/avoid-new': 'error',

    // ✅ promise/no-nesting
    // Disallow nested then() or catch() statements.
    // 🏆 Best practice. Nesting promises make code harder to read and understand.
    'promise/no-nesting': 'error',

    // ✅ promise/no-return-wrap
    // Prevents unnecessary wrapping of return values in promises via Promise.resolve/reject.
    // 🏆 Best practice.
    'promise/no-return-wrap': 'error',

    // ✅ promise/param-names
    // Enforce standard parameter names for Promise constructors (resolve, reject).
    // 🏆 Best practice.
    'promise/param-names': 'error',

    // ✅ promise/prefer-await-to-callbacks
    // Encourage using async/await instead of traditional callback functions.
    // 🏆 Best practice.
    'promise/prefer-await-to-callbacks': 'error',

    // ✅ promise/prefer-await-to-then
    // Prefer await to then()/catch()/finally() when reading Promise values.
    // 🏆 Best practice.
    'promise/prefer-await-to-then': 'error',

    // ✅ promise/prefer-catch
    // Prefer dedicated `.catch()` method for error handling.
    // 🏆 Best practice.
    'promise/prefer-catch': 'error',
  },
} satisfies OxlintConfig;
