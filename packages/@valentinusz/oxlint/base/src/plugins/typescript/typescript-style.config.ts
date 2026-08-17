import type { OxlintConfig } from 'oxlint';

export const typescriptStyleConfig = {
  rules: {
    // ❌ typescript/adjacent-overload-signatures
    // Require that function overload signatures be consecutive.
    // Not useful enough, overload signatures are used rarely and usually used for util functions which can just be
    // moved to separate files to ensure grouping.

    // ✅ typescript/array-type
    // Require consistently using either `T[]` or `Array<>` for arrays.
    // Array literal is preferred.
    'typescript/array-type': 'error',

    // ❌ typescript/ban-tslint-comment
    // This rule disallows `tslint:<rule-flag>` comments.
    // Not useful enough.

    // ✅ typescript/class-literal-property-style
    // Enforces a consistent style for exposing literal values on classes.
    // Mixing readonly fields and trivial literal getters for the same kind of value makes class APIs inconsistent and
    // harder to scan.
    'typescript/class-literal-property-style': 'error',

    // ✅ typescript/consistent-generic-constructors
    // When constructing a generic class, you can specify the type arguments on either the left-hand side
    // (as a type annotation) or the right-hand side (as part of the constructor call).
    // Inconsistent usage of generic constructors can make the code harder to read and maintain.
    'typescript/consistent-generic-constructors': ['error', 'constructor'],

    // ❌ typescript/consistent-indexed-object-style
    // Choose between requiring either Record type or indexed signature types.
    // Too limiting. Sometimes index signature is needed for complex types.

    // ✅ typescript/consistent-type-assertions
    // Enforce consistent usage of TypeScript type assertions.
    // `as` is preferred over angle bracket syntax.
    'typescript/consistent-type-assertions': ['error'],

    // ❌ typescript/consistent-type-definitions
    // Enforce type definitions to consistently use either `interface` or `type`.
    // Too limiting sometimes using `type` is preferred.

    // ✅ typescript/consistent-type-exports
    // 💭 Type aware.
    // Enforce using export type for exports that are only used as types.
    // Mixing type-only exports with value exports without export type makes module intent harder to read and can cause
    // unnecessary runtime export surface.
    'typescript/consistent-type-exports': 'error',

    // ✅ typescript/consistent-type-imports
    // Enforce consistent usage of type imports by adding or removing the type keyword from imports.
    // Inconsistent usage of type imports can make the code harder to read and understand.
    'typescript/consistent-type-imports': 'error',

    // ✅ typescript/dot-notation
    // Enforce dot notation whenever property access can be written safely as obj.prop.
    // Dot notation is generally more readable and concise than bracket notation for static property names.
    'typescript/dot-notation': 'error',

    // ✅ typescript/method-signature-style
    // Enforce using a particular method signature syntax.
    // Property syntax is preferred in TypeScript.
    'typescript/method-signature-style': ['error', 'property'],

    // ✅ typescript/no-empty-interface
    // Disallow the declaration of empty interfaces.
    // Using an empty interface is often a sign of programmer error.
    'typescript/no-empty-interface': 'error',

    // ✅ typescript/no-inferrable-types
    // Disallow explicit type declarations for variables or parameters initialized to a `number`, `string`, or
    // `boolean`.
    // Explicitly typing variables or parameters that are initialized to a literal value is unnecessary because
    // TypeScript can infer the type from the value.
    'typescript/no-inferrable-types': 'error',

    // ❌ typescript/no-unnecessary-qualifier
    // 💭 Type aware.
    // Disallow namespace qualifiers when the referenced name is already in scope.
    // Superseded by typescript/no-namespace.

    // ❌ typescript/parameter-properties
    // Requires or disallows parameter properties in class constructors.
    // Stylistic preference.

    // ✅ typescript/prefer-find
    // 💭 Type aware.
    // Prefer .find(...) over .filter(...)[0] for retrieving a single element.
    // Better performance and shows intent better.
    'typescript/prefer-find': 'error',

    // ❌ typescript/prefer-for-of
    // Enforces the use of a for...of loop instead of a for loop with simple iteration.
    // Not useful enough.

    // ✅ typescript/prefer-function-type
    // Enforce using function types instead of interfaces with call signatures.
    // The function type form is generally preferred when possible for being more succinct and readable
    'typescript/prefer-function-type': 'error',

    // ✅ typescript/prefer-readonly
    // 💭 Type aware.
    // Require class members that are never reassigned to be marked readonly.
    // Members that never change should be declared readonly to make class invariants explicit and prevent accidental
    // mutation.
    'typescript/prefer-readonly': 'error',

    // ❌ typescript/prefer-reduce-type-parameter
    // 💭 Type aware.
    // This rule prefers using a type parameter for the accumulator in Array#reduce() instead of casting.
    // Superseded by typescript/no-unsafe-type-assertion.

    // ✅ typescript/prefer-regexp-exec
    // 💭 Type aware.
    // Prefer `RegExp#exec()` over `String#match()` when extracting a regex match.
    // `exec()` is more explicit about matching with a regular expression and avoids the overloaded behavior of
    // `String#match()`.
    'typescript/prefer-regexp-exec': 'error',

    // ✅ typescript/prefer-return-this-type
    // 💭 Type aware.
    // This rule enforces using `this` types for return types when possible.
    // Classes that have methods which return the instance itself should use `this` as the return type instead of the
    // class name. This provides better type safety for inheritance, as the return type will be the actual subclass type
    // rather than the base class type
    'typescript/prefer-return-this-type': 'error',

    // ✅ typescript/prefer-string-starts-ends-with
    // 💭 Type aware.
    // Prefer startsWith and endsWith over manual string boundary checks.
    // Easier to read.
    'typescript/prefer-string-starts-ends-with': 'error',

    // ✅ typescript/unified-signatures
    // Disallow overload signatures that can be unified into one.
    // Easier to read.
    'typescript/unified-signatures': 'error',
  },
} satisfies OxlintConfig;
