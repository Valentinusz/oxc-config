import type { OxlintConfig } from "oxlint";

export const typescriptConfig = {
  plugins: ["typescript"],
  rules: {
    // -----------------
    // Correctness rules
    // -----------------

    // ✅ typescript/no-unsafe-declaration-merging
    // Disallow unsafe declaration merging.
    // Declaration merging can introduce unexpected type widening and runtime issues when types are incompatible.
    "typescript/no-unsafe-declaration-merging": "error",

    // ✅ typescript/no-unsafe-assignment
    // Disallow assigning a value with type `any` to variables and properties.
    // Prevents loss of type safety by avoiding `any` propagation.
    "typescript/no-unsafe-assignment": "error",

    // ✅ typescript/no-unsafe-call
    // Disallows calling a value with type `any`.
    // Calling an `any` value may lead to runtime errors.
    "typescript/no-unsafe-call": "error",

    // ✅ typescript/no-non-null-asserted-optional-chain
    // Disallow non-null assertions after an optional chain expression.
    // Avoids false assumptions about presence of values when using `?.`.
    "typescript/no-non-null-asserted-optional-chain": "error",

    // ✅ typescript/no-extra-non-null-assertion
    // Disallow extra non-null assertions.
    // Reduces redundant `!` usage which may hide errors.
    "typescript/no-extra-non-null-assertion": "error",

    // ✅ typescript/no-unsafe-enum-comparison
    // Disallow comparing an enum value with a non-enum value.
    // Comparing enums to unrelated values can be a source of bugs.
    "typescript/no-unsafe-enum-comparison": "error",

    // ✅ typescript/no-unsafe-function-type
    // Disallow using the unsafe built-in Function type.
    // Using `Function` bypasses parameter and return type checks.
    "typescript/no-unsafe-function-type": "error",

    // ✅ typescript/no-useless-empty-export
    // Disallow empty exports that don't change anything in a module file.
    // Keeps module surface minimal and purposeful.
    "typescript/no-useless-empty-export": "error",

    // ----------------
    // Pedantic rules
    // ----------------

    // ✅ typescript/ban-types
    // Disallow certain types.
    // Helps enforce safer alternatives to problematic built-in types.
    "typescript/ban-types": "error",

    // ✅ typescript/ban-ts-comment
    // Disallow `// @ts-<directive>` comments or require descriptions.
    // These comments can hide real type issues if overused.
    "typescript/ban-ts-comment": "error",

    // ✅ typescript/prefer-ts-expect-error
    // Enforce using @ts-expect-error over @ts-ignore.
    // Encourages explicit handling of expected type errors during development.
    "typescript/prefer-ts-expect-error": "error",

    // ✅ typescript/prefer-enum-initializers
    // Require each enum member value to be explicitly initialized.
    // Prevents implicit numeric enum values causing unexpected behavior.
    "typescript/prefer-enum-initializers": "error",

    // ----------------
    // Style rules
    // ----------------

    // ✅ typescript/adjacent-overload-signatures
    // Require that function overload signatures be consecutive.
    // Improves readability of overload declarations.
    "typescript/adjacent-overload-signatures": "error",

    // ✅ typescript/array-type
    // Require consistent array type syntax (`T[]` or `Array<T>`).
    // Keeps codebase style consistent and predictable.
    "typescript/array-type": "error",

    // ✅ typescript/class-literal-property-style
    // Enforces a consistent style for exposing literal values on classes.
    "typescript/class-literal-property-style": "error",

    // ✅ typescript/consistent-type-assertions
    // Enforce consistent usage of TypeScript type assertions.
    "typescript/consistent-type-assertions": "error",

    // ✅ typescript/consistent-type-definitions
    // Enforce type definitions to consistently use either `interface` or `type`.
    "typescript/consistent-type-definitions": "error",

    // ✅ typescript/consistent-type-imports
    // Enforce consistent usage of type imports.
    "typescript/consistent-type-imports": "error",

    // ✅ typescript/consistent-indexed-access
    // Prefer using a consistent indexed access style when appropriate.
    "typescript/consistent-indexed-access": "error",

    // ✅ typescript/method-signature-style
    // Enforce using a particular method signature syntax.
    "typescript/method-signature-style": "error",

    // ✅ typescript/parameter-properties
    // Requires or disallows parameter properties in class constructors.
    "typescript/parameter-properties": "error",

    // ✅ typescript/prefer-for-of
    // Enforces the use of a `for...of` loop instead of a `for` loop with simple iteration.
    "typescript/prefer-for-of": "error",

    // ✅ typescript/prefer-function-type
    // Enforce using function types instead of interfaces with call signatures.
    "typescript/prefer-function-type": "error",

    // ✅ typescript/prefer-optional-chain
    // Enforce using concise optional chain (`?.`) expressions.
    "typescript/prefer-optional-chain": "error",

    // ✅ typescript/unified-signatures
    // Disallow overload signatures that can be unified into one.
    "typescript/unified-signatures": "error",

    // --------------------
    // Restriction rules
    // --------------------

    // ✅ typescript/explicit-module-boundary-types
    // Require explicit return and argument types on exported functions and public methods.
    "typescript/explicit-module-boundary-types": "error",

    // ✅ typescript/explicit-member-accessibility
    // Require explicit accessibility modifiers on class properties and methods.
    "typescript/explicit-member-accessibility": "error",

    // ✅ typescript/no-explicit-any
    // Disallows explicit use of the `any` type.
    "typescript/no-explicit-any": "error",

    // ✅ typescript/no-namespace
    // Disallow TypeScript namespaces.
    "typescript/no-namespace": "error",

    // ✅ typescript/no-require-imports
    // Forbids the use of CommonJS `require` calls.
    "typescript/no-require-imports": "error",

    // ✅ typescript/no-import-type-side-effects
    // Enforce the use of top-level `import type` qualifier when appropriate.
    "typescript/no-import-type-side-effects": "error",

    // ✅ typescript/no-inferrable-types
    // Disallow explicit type declarations for inferrable types.
    "typescript/no-inferrable-types": "error",

    // ✅ typescript/no-invalid-void-type
    // Disallow `void` type usage outside return types and configured generic contexts.
    "typescript/no-invalid-void-type": "error",

    // ✅ typescript/no-restricted-types
    // Disallow certain types from being used.
    "typescript/no-restricted-types": "error",

    // ✅ typescript/no-var-requires
    // Disallow the use of require() statements except in import expressions.
    "typescript/no-var-requires": "error",

    // ✅ typescript/no-empty-interface
    // Disallow empty interfaces that do not define any members.
    "typescript/no-empty-interface": "error",

    // -------------------
    // Suspicious rules
    // -------------------

    // ✅ typescript/no-confusing-non-null-assertion
    // Disallow non-null assertion in locations that may be confusing.
    "typescript/no-confusing-non-null-assertion": "error",

    // ✅ typescript/no-extraneous-class
    // Disallow classes used as namespaces.
    "typescript/no-extraneous-class": "error",

    // ✅ typescript/no-misused-new
    // Enforce valid definitions of `new` and `constructor` in TypeScript.
    "typescript/no-misused-new": "error",

    // ✅ typescript/no-this-alias
    // Disallow aliasing of `this`.
    "typescript/no-this-alias": "error",

    // ✅ typescript/no-unnecessary-type-constraint
    // Disallow unnecessary constraints on generic types.
    "typescript/no-unnecessary-type-constraint": "error",

    // ✅ typescript/no-unnecessary-type-parameters
    // Disallow type parameters that are declared but not meaningfully used.
    "typescript/no-unnecessary-type-parameters": "error",

    // ----------------
    // Misc / Runtime
    // ----------------

    // ✅ typescript/require-await
    // Disallow async functions which do not have an await expression.
    "typescript/require-await": "error",

    // ✅ typescript/return-await
    // Enforce consistent returning of awaited values from async functions.
    "typescript/return-await": "error",
  },
} satisfies OxlintConfig;
