import type { OxlintConfig } from 'oxlint';

export const promiseCorrectness = {
  rules: {
    // ✅ promise/no-callback-in-promise
    // Disallows calling a callback function (cb()) inside a Promise.then() or Promise.catch().
    // Directly invoking a callback inside a then() or catch() method can lead to unexpected behavior.
    // 🐛 Bug prevention.
    'promise/no-callback-in-promise': 'error',

    // ✅ promise/no-new-statics
    // Disallows calling new on static Promise methods (e.g., new Promise.resolve()).
    // Calling a static Promise method with new is invalid and will result in a TypeError at runtime.
    // 🐛 Bug prevention.
    'promise/no-new-statics': 'error',

    // ✅ promise/valid-params
    // Enforces the proper number of arguments are passed to Promise functions.
    // Calling a Promise function with the incorrect number of arguments can lead to unexpected behavior or hard to spot
    // bugs.
    // 🐛 Bug prevention.
    'promise/valid-params': 'error',
  },
} satisfies OxlintConfig;
