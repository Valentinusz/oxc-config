import type { OxlintConfig } from "oxlint";

export const typescriptPedanticConfig = {
  rules: {
    // ❌ typescript/ban-ts-comment
    // This rule lets you set which directive comments you want to allow in your codebase.
    // TS comments are sometimes useful.

    // ❌ typescript/ban-types
    // 🗑️ Deprecated.
    // This rule bans specific types and can suggest alternatives. Note that it does not ban the corresponding runtime
    // objects from being used.
    // Superseded by other rules.

    // ❌ typescript/no-confusing-void-expression
    // 💭 Type aware.
    // This rule forbids using void expressions in confusing locations such as arrow function returns.
    // Not useful enough.

    // 🟧 typescript/no-deprecated
    // 💭 Type aware.
    // Disallow using code marked as @deprecated.
    // It is useful to be warned of using deprecated code.
    "typescript/no-deprecated": "warn",

    // ✅ typescript/no-misused-promises
    // 💭 Type aware.
    // This rule forbids providing Promises to logical locations such as if statements in places where the TypeScript
    // compiler allows them, but they are not handled properly. These situations can often arise due to a missing await
    // keyword or just a misunderstanding of the way async functions are handled/awaited.
    "typescript/no-misused-promises": "error",

    // ✅ typescript/no-mixed-enums
    // 💭 Type aware.
    // This rule disallows enums from having both string and numeric members.
    // Enums themselves are discouraged, but this can help spot errors if you are using them.
    "typescript/no-mixed-enums": "error",

    // ✅ typescript/no-unsafe-argument
    // 💭 Type aware.
    // This rule disallows calling a function with an argument which is typed as any.
    // The `any` type in TypeScript is a dangerous "escape hatch" from the type system. While it is already disabled,
    // library functions might still return any which you then forward as parameters without realizing.
    "typescript/no-unsafe-argument": "error",

    // ✅ typescript/no-unsafe-assignment
    // 💭 Type aware.
    // This rule disallows assigning a value with type any to variables and properties.
    // The `any` type in TypeScript is a dangerous "escape hatch" from the type system.
    "typescript/no-unsafe-assignment": "error",

    // ✅ typescript/no-unsafe-call
    // 💭 Type aware.
    // This rule disallows calling a value with type any.
    // The `any` type in TypeScript is a dangerous "escape hatch" from the type system.
    "typescript/no-unsafe-call": "error",

    // ✅ typescript/no-unsafe-function-type
    // Disallow using the unsafe built-in Function type.
    // Function type syntax is preferred.
    "typescript/no-unsafe-function-type": "error",

    // ✅ typescript/no-unsafe-member-access
    // 💭 Type aware.
    // This rule disallows member access on a value with type any.
    // The `any` type in TypeScript is a dangerous "escape hatch" from the type system.
    "typescript/no-unsafe-member-access": "error",

    // ✅ typescript/no-unsafe-return
    // 💭 Type aware.
    // This rule disallows returning a value with type any from a function.
    // The `any` type in TypeScript is a dangerous "escape hatch" from the type system.
    "typescript/no-unsafe-return": "error",

    // ✅ typescript/only-throw-error
    // 💭 Type aware.
    // This rule disallows throwing non-Error values.
    // Useful, but feel free to disable if a library relies on using throw with a function call (e.g., TanStack Router).
    "typescript/only-throw-error": "error",

    // ✅ typescript/prefer-enum-initializers
    // Require each enum member value to be explicitly initialized.
    // While enums are discouraged, implicit values can cause bugs if enums are modified over time.
    "typescript/prefer-enum-initializers": "error",

    // ✅ typescript/prefer-includes
    // 💭 Type aware.
    // Enforce using .includes() instead of .indexOf() !== -1 or /regex/.test().
    // More readable.
    "typescript/prefer-includes": "error",

    // ✅ typescript/prefer-nullish-coalescing
    // 💭 Type aware.
    // Enforce using the nullish coalescing operator (??) instead of logical OR (||) or conditional expressions when the
    // left operand might be null or undefined.
    // More readable.
    "typescript/prefer-nullish-coalescing": "error",

    // ✅ typescript/prefer-promise-reject-errors
    // 💭 Type aware.
    // This rule enforces passing an Error object to Promise.reject().
    // It's considered good practice to only reject promises with Error objects.
    "typescript/prefer-promise-reject-errors": "error",

    // ❌ typescript/prefer-readonly-parameter-types
    // 💭 Type aware.
    // Require function and method parameters to use readonly-compatible types.
    // Not useful, usually you don't mutate parameters.

    // ✅ typescript/prefer-ts-expect-error
    // Enforce using `@ts-expect-error` over `@ts-ignore`.
    // `@ts-expect-error` is stricter.
    "typescript/prefer-ts-expect-error": "error",

    // ❌ typescript/related-getter-setter-pairs
    // This rule enforces that getters and setters for the same property are defined together and have related types.
    // Too limiting, not useful enough.

    // ✅ typescript/require-await
    // 💭 Type aware.
    // This rule disallows async functions which do not have an await expression.
    // Async functions that don't use await are usually a mistake.
    "typescript/require-await": "error",

    // ✅ typescript/restrict-plus-operands
    // 💭 Type aware.
    // This rule requires both operands of addition to be the same type and be number, string, or any.
    // JavaScript's + operator can be used for both numeric addition and string concatenation. When the operands are of
    // different types, JavaScript's type coercion rules can lead to unexpected results
    "typescript/restrict-plus-operands": "error",

    // ✅ typescript/return-await
    // 💭 Type aware.
    // This rule enforces consistent returning of awaited values from async functions.
    // Require await when it would affect error handling.
    "typescript/return-await": ["error", "in-try-catch"],

    // ✅ typescript/strict-boolean-expressions
    // 💭 Type aware.
    // Disallow certain types in boolean expressions.
    // It is better to explicitly convert values to booleans in conditionals.
    "typescript/strict-boolean-expressions": "error",

    // ✅ typescript/strict-void-return
    // 💭 Type aware.
    // Disallow returning non-void values where a `void` return is expected.
    // Returning values from void contexts can hide logic errors and make callback APIs behave unexpectedly.
    "typescript/strict-void-return": "error",

    // ✅ typescript/switch-exhaustiveness-check
    // 💭 Type aware.
    // This rule requires switch statements to be exhaustive when switching on union types.
    // When switching on a union type, it's important to handle all possible cases.
    "typescript/switch-exhaustiveness-check": "error",
  },
} satisfies OxlintConfig;
