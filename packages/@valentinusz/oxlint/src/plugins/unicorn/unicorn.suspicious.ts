import type { OxlintConfig } from 'oxlint';

export const unicornSuspicious = {
  rules: {
    // ✅ unicorn/consistent-function-scoping
    // Disallow functions that are declared in a scope which does not capture any variables from the outer scope.
    // 🏆 Best practice. Moving function declarations to the highest possible scope improves readability and
    // performance.
    'unicorn/consistent-function-scoping': 'error',

    // ❌ unicorn/no-accessor-recursion
    // Disallow recursive access to this within getters and setters.
    // Not useful enough.

    // ✅ unicorn/no-array-fill-with-reference-type
    // Disallows using reference values as Array#fill() values.
    // 🐛 Bug prevention.
    'unicorn/no-array-fill-with-reference-type': 'error',

    // ❌ unicorn/no-array-reverse
    // Prefer using Array#toReversed() over Array#reverse().
    // ⛓️ Too restrictive. Sometimes sorting in-place is fine.

    // ❌ unicorn/no-array-sort
    // Prefer using Array#toSorted() over Array#sort().
    // ⛓️ Too restrictive. Sometimes sorting in-place is fine.

    // ❌ unicorn/no-confusing-array-with
    // Disallows confusing uses of Array#with().
    // Not useful enough.

    // ✅ unicorn/no-instanceof-builtins
    // Disallows the use of instanceof with ECMAScript built-in constructors because.
    // 🏆 Best practice.
    'unicorn/no-instanceof-builtins': 'error',

    // ✅ unicorn/prefer-add-event-listener
    // Enforces the use of .addEventListener() and .removeEventListener() over their on-function counterparts.
    // 🏆 Best practice.
    'unicorn/prefer-add-event-listener': 'error',

    // ❌ unicorn/require-module-specifiers
    // Enforce a non-empty specifier list in import and export statements.
    // ➡️ Handled by import/no-empty-named-blocks.

    // ❌ unicorn/require-post-message-target-origin
    // Enforce using the targetOrigin argument with window.postMessage().
    // Useful, but the rule doesn't correctly identify calls.
  },
} satisfies OxlintConfig;
