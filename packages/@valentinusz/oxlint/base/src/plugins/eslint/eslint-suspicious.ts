import type { OxlintConfig } from "oxlint";

export const eslintSuspiciousConfig = {
  rules: {
    // ❌ eslint/block-scoped-var
    // Enforces that variables are both declared and used within the same block scope.
    // Hoisted variables declarations are already disabled.

    // ✅ eslint/no-extend-native
    // Disallow extending native objects.
    // Can lead to unexpected bugs.
    "eslint/no-extend-native": "error",

    // ❌ eslint/no-extra-bind
    // Disallow unnecessary calls to .bind().
    // Not useful enough.

    // ✅ eslint/no-implied-eval
    // Disallow the use of eval()-like methods.
    // Enabled by default.

    // ✅ eslint/no-new
    // Disallow the use of the new operator when not part of an assignment or comparison.
    // Not storing and using the newly created object is often a bug.
    "eslint/no-new": "error",

    // ❌ eslint/no-shadow
    // Disallow variable declarations from shadowing variables declared in the outer scope.
    // Too restrictive.

    // ❌ eslint/no-underscore-dangle
    // Disallow identifiers that start with underscore.
    // Too restrictive. It is useful to indicate that a variable is purposefully unused by prefixing with an underscore.

    // ❌ eslint/no-unexpected-multiline
    // Disallow confusing multiline expressions
    "eslint/no-unexpected-multiline": "error",

    // ❌ eslint/no-unmodified-loop-condition
    // Disallow references in loop conditions that are never modified within the loop.
    // This can lead to infinite loops.
    "eslint/no-unmodified-loop-condition": "error",

    // ✅ eslint/no-unneeded-ternary
    // Disallow ternary operators when simpler alternatives exist.
    // Makes code more readable.
    "eslint/no-unneeded-ternary": "error",

    // ❌ eslint/no-useless-concat
    // Disallow unnecessary concatenation of literals or template literals.
    // Superseded by eslint/prefer-template

    // ❌ eslint/no-useless-constructor
    // Disallow constructors that can be safely removed without changing how the class works.
    // Not useful enough.

    // ✅ eslint/preserve-caught-error
    // Enforces that when re-throwing an error in a catch block, the original error is preserved using the `cause`
    // property.
    // Re-throwing an error without preserving the original error loses important debugging information.
    "eslint/preserve-caught-error": "error",
  },
} satisfies OxlintConfig;
