import type { OxlintConfig } from 'oxlint';

export const unicornRestrictionConfig = {
  rules: {
    // ❌ unicorn/import-style
    // Enforce specific import styles per module.
    // Not useful enough.

    // ✅ unicorn/no-abusive-eslint-disable
    // Disallows oxlint-disable or eslint-disable comments without specifying rules.
    // Best practice.
    'unicorn/no-abusive-eslint-disable': 'error',

    // ❌ unicorn/no-anonymous-default-export
    // Disallows anonymous functions and classes as default exports.
    // Superseded by import/no-default-export

    // ✅ unicorn/no-array-for-each
    // Forbids the use of Array#forEach in favor of a for loop.
    // For-of is better.
    'unicorn/no-array-for-each': 'error',

    // ❌ unicorn/no-array-reduce
    // Disallow Array#reduce() and Array#reduceRight().
    // Too restrictive.

    // ✅ unicorn/no-document-cookie
    // Disallows direct use of document.cookie.
    // Best practice.
    'unicorn/no-document-cookie': 'error',

    // ✅ unicorn/no-length-as-slice-end
    // Disallow using length as the end argument of a slice call.
    // Best practice.
    'unicorn/no-length-as-slice-end': 'error',

    // ❌ unicorn/no-magic-array-flat-depth
    // Disallow magic numbers for Array.prototype.flat depth.
    // Too restrictive.

    // ❌ unicorn/no-process-exit
    // Disallow all usage of process.exit().
    // Not useful enough.

    // ✅ unicorn/no-useless-error-capture-stack-trace
    // Disallows unnecessary Error.captureStackTrace(…) in error constructors.
    // Best practice.
    'unicorn/no-useless-error-capture-stack-trace': 'error',

    // ❌ unicorn/prefer-modern-math-apis
    // Checks for usage of legacy patterns for mathematical operations.
    // Not useful enough.

    // ❌ unicorn/prefer-module
    // Prefer JavaScript modules (ESM) over CommonJS.
    // Many rules already disable CommonJS features.

    // ✅ unicorn/prefer-node-protocol
    // Prefer using the node: protocol when importing Node.js built-in modules.
    // Best practice. Node.js recommends this.
    'unicorn/prefer-node-protocol': 'error',

    // ✅ unicorn/prefer-number-properties
    // Disallows use of parseInt(), parseFloat(), isNaN(), isFinite(), NaN, Infinity and -Infinity as global variables.
    // Best practice.
    'unicorn/prefer-number-properties': 'error',
  },
} satisfies OxlintConfig;
