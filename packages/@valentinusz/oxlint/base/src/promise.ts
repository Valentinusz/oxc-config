import type { OxlintConfig } from "oxlint";

export const promiseConfig = {
  plugins: ["promise"],
  rules: {
    // -----------------
    // Correctness rules
    // -----------------

    // ✅ promise/no-callback-in-promise
    // Disallows calling a callback function (cb()) inside a Promise.then() or Promise.catch().
    // Directly invoking a callback inside a then() or catch() method can lead to unexpected behavior.
    // Correctness rules are enabled by default.

    // ✅ promise/no-new-statics
    // Disallows calling new on static Promise methods (e.g., new Promise.resolve()).
    // Calling a static Promise method with new is invalid and will result in a TypeError at runtime.
    // Correctness rules are enabled by default.

    // ✅ promise/valid-params
    // Enforces the proper number of arguments are passed to Promise functions.
    // Calling a Promise function with the incorrect number of arguments can lead to unexpected behavior or hard to spot bugs.
    // Correctness rules are enabled by default.

    // ----------------
    // Nursery rules
    // ----------------

    // ❌ promise/no-return-in-finally
    // Disallow return statements in a finally() callback of a promise.
    // Not useful enough.

    // --------------------
    // Restriction rules
    // --------------------

    // ✅ promise/catch-or-return
    // Ensure that each time a then() is applied to a promise, a catch() must be applied as well (or the promise is
    // returned).
    // Not catching errors in a promise can cause hard to debug problems or missing handling of error conditions.
    "promise/catch-or-return": "error",

    // ✅ promise/spec-only
    // Disallow use of non-standard Promise static methods.
    // These methods are not standard and often are not even available.
    "promise/spec-only": "error",

    // --------------
    // Style rules
    // --------------

    // ✅ promise/avoid-new
    // Disallow creating promises with new Promise().
    // async/await is preferred.
    "promise/avoid-new": "error",

    // ✅ promise/no-nesting
    // Disallow nested then() or catch() statements.
    // Nesting promises make code harder to read and understand.
    "promise/no-nesting": "error",

    // ❌ promise/no-return-wrap
    // Prevents unnecessary wrapping of return values in promises via Promise.resolve/reject.
    // Stylistic preference.

    // ✅ promise/param-names
    // Enforce standard parameter names for Promise constructors (resolve, reject).
    // Makes code easier to read.
    "promise/param-names": "error",

    // ✅ promise/prefer-await-to-callbacks
    // Encourage using async/await instead of traditional callback functions.
    // Makes code easier to read.
    "promise/prefer-await-to-callbacks": "error",

    // ✅ promise/prefer-await-to-then
    // Prefer await to then()/catch()/finally() when reading Promise values.
    // Makes code easier to read.
    "promise/prefer-await-to-then": "error",

    // ✅ promise/prefer-catch
    // Prefer dedicated catch method for error handling.
    // Makes code easier to read.
    "promise/prefer-catch": "error",

    // -------------------
    // Suspicious rules
    // -------------------

    // ✅ promise/always-return
    // Require returning inside each then() to create readable and reusable Promise chains.
    "promise/always-return": "error",

    // ✅ promise/no-multiple-resolved
    // Warns when a Promise executor resolves multiple times along different code paths.
    "promise/no-multiple-resolved": "error",

    // ✅ promise/no-promise-in-callback
    // Disallows the use of Promises within error-first callback functions.
    "promise/no-promise-in-callback": "error",
  },
} satisfies OxlintConfig;
