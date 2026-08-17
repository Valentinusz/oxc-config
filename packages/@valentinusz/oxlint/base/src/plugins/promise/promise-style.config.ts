import type { OxlintConfig } from 'oxlint';

export const promiseStyleConfig = {
  rules: {
    // ✅ promise/avoid-new
    // Disallow creating promises with new Promise().
    // async/await is preferred.
    'promise/avoid-new': 'error',

    // ✅ promise/no-nesting
    // Disallow nested then() or catch() statements.
    // Nesting promises make code harder to read and understand.
    'promise/no-nesting': 'error',

    // ❌ promise/no-return-wrap
    // Prevents unnecessary wrapping of return values in promises via Promise.resolve/reject.
    // Stylistic preference.

    // ✅ promise/param-names
    // Enforce standard parameter names for Promise constructors (resolve, reject).
    // Makes code easier to read.
    'promise/param-names': 'error',

    // ✅ promise/prefer-await-to-callbacks
    // Encourage using async/await instead of traditional callback functions.
    // Makes code easier to read.
    'promise/prefer-await-to-callbacks': 'error',

    // ✅ promise/prefer-await-to-then
    // Prefer await to then()/catch()/finally() when reading Promise values.
    // Makes code easier to read.
    'promise/prefer-await-to-then': 'error',

    // ✅ promise/prefer-catch
    // Prefer dedicated catch method for error handling.
    // Makes code easier to read.
    'promise/prefer-catch': 'error',
  },
} satisfies OxlintConfig;
