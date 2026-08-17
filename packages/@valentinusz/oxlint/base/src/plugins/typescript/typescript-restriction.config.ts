import type { OxlintConfig } from 'oxlint';

export const typescriptRestrictionConfig = {
  rules: {
    // ❌ typescript/explicit-function-return-type
    // This rule enforces that functions haĐve an explicit return type annotation.
    // Useful, but too limiting, for complex objects (think wrappers around Redux functions) defining the return type is
    // too challenging.

    // ✅ typescript/explicit-member-accessibility
    // Require explicit accessibility modifiers on class properties and methods.
    // In TS the default access modifier is public, which is more lenient than other languages.
    'typescript/explicit-member-accessibility': 'error',

    // ❌ typescript/explicit-module-boundary-types
    // Require explicit return and argument types on exported functions&#39; and classes&#39; public class methods.
    // Useful, but too limiting just like typescript/explicit-function-return-type

    // ✅ typescript/no-dynamic-delete
    // Disallow using the delete operator on computed key expressions.
    // Deleting dynamically computed keys can be dangerous and in some cases not well optimized. Using the delete
    // operator on keys that aren't runtime constants could be a sign that you're using the wrong data structures.
    'typescript/no-dynamic-delete': 'error',

    // ✅ typescript/no-empty-object-type
    // To avoid confusion around the `{}` type allowing any non-nullish value, this rule bans usage of the `{}` type.
    // That includes interfaces and object type aliases with no fields.
    // Use of `{}` as a type is usually an error.
    'typescript/no-empty-object-type': 'error',

    // ✅ typescript/no-explicit-any
    // Disallows explicit use of the `any` type.
    // The `any` type in TypeScript is a dangerous "escape hatch".
    'typescript/no-explicit-any': 'error',

    // ✅ typescript/no-import-type-side-effects
    // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
    // Inline `type` qualifiers still import side effects, which can cause unexpected bugs.
    'typescript/no-import-type-side-effects': 'error',

    // ✅ typescript/no-invalid-void-type
    // Disallow `void` type usage outside return types and configured generic contexts.
    // `void` is primarily meaningful in return positions.
    'typescript/no-invalid-void-type': 'error',

    // ✅ typescript/no-namespace
    // Disallow TypeScript namespaces.
    // Namespaces are an outdated way to organize TypeScript code.
    'typescript/no-namespace': 'error',

    // ❌ typescript/no-non-null-asserted-nullish-coalescing
    // Disallow non-null assertions in the left operand of a nullish coalescing operator.
    // Superseded by typescript/no-non-null-assertion being enabled.

    // ✅ typescript/no-non-null-assertion
    // Disallow non-null assertions using the `!` postfix operator.
    // `!` is an escape hatch and usually indicates, that the code is not fully type-safe.
    'typescript/no-non-null-assertion': 'error',

    // ✅ typescript/no-require-imports
    // Forbids the use of CommonJS require calls.
    // ES modules are preferred.
    'typescript/no-require-imports': 'error',

    // ❌ typescript/no-restricted-types
    // Disallow certain types from being used.
    // Useful, but should be managed on a project level.

    // ❌ typescript/no-var-requires
    // 🗑️ Deprecated.
    // Disallow require statements except in import statements.
    // Superseded by typescript/no-require-imports.

    // ❌ typescript/non-nullable-type-assertion-style
    // 💭 Type aware.
    // This rule prefers a non-null assertion over an explicit type cast for non-nullable types.
    // Superseded by typescript/no-non-null-assertion being enabled.

    // ❌ typescript/prefer-literal-enum-member
    // Explicit enum values must only be literal values (string, number, boolean, etc.).
    // Enums a discouraged. Too limiting.

    // ✅ typescript/promise-function-async
    // This rule requires any function or method that returns a Promise to be marked as `async`.
    // Functions that return Promises should typically be marked as `async` to make their asynchronous nature clear and
    // to enable the use of `await` within them. This makes the code more readable and helps prevent common mistakes
    // with Promise handling.
    'typescript/promise-function-async': 'error',

    // ❌ typescript/use-unknown-in-catch-callback-variable
    // This rule enforces using unknown for catch clause variables instead of any.
    // Type of error variable is `unknown` in newer TypeScript versions.
  },
} satisfies OxlintConfig;
