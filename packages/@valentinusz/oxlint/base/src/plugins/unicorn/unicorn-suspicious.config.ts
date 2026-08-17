import type { OxlintConfig } from 'oxlint';

export const unicornSuspiciousConfig = {
  rules: {
    // ✅ unicorn/consistent-function-scoping
    // Disallow functions that are declared in a scope which does not capture any variables from the outer scope.
    // Moving function declarations to the highest possible scope improves readability and performance.
    'unicorn/consistent-function-scoping': 'error',

    // ✅ unicorn/no-accessor-recursion
    // Disallow recursive access to this within getters and setters.
    // Useful for catching bugs.
    'unicorn/no-accessor-recursion': 'error',

    // ✅ unicorn/no-array-fill-with-reference-type
    // Disallows using reference values as Array#fill() values.
    // Useful for preventing bugs.
    'unicorn/no-array-fill-with-reference-type': 'error',

    // ❌ unicorn/no-array-reverse
    // Prefer using Array#toReversed() over Array#reverse().
    // Too restrictive.

    // ❌ unicorn/no-array-sort
    // Prefer using Array#toSorted() over Array#sort().
    // Too restrictive.

    // ❌ unicorn/no-confusing-array-with
    // Disallows confusing uses of Array#with().
    // Not useful enough.

    // ❌ unicorn/no-instanceof-builtins
    // Disallows the use of instanceof with ECMAScript built-in constructors because:
    // Too restrictive.

    // ✅ unicorn/prefer-add-event-listener
    // Enforces the use of .addEventListener() and .removeEventListener() over their on-function counterparts.
    // Best practice.
    'unicorn/prefer-add-event-listener': 'error',

    // ❌ unicorn/require-module-specifiers
    // Enforce a non-empty specifier list in import and export statements.
    // Superseded by import(no-empty-named-blocks)

    // ❌ unicorn/require-post-message-target-origin
    // Enforce using the targetOrigin argument with window.postMessage().
    // Not useful enough.
  },
} satisfies OxlintConfig;
