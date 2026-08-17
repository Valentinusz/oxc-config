import type { OxlintConfig } from "oxlint";

export const typescriptConfig = {
  plugins: ["typescript"],
  rules: {
    // -----------------
    // Correctness rules
    // -----------------

    // ℹ️ All correctness rules are enabled.

    // ✅ typescript/await-thenable
    // 💭 Type aware. ⚙️ Default.
    // This rule disallows awaiting a value that is not a Thenable.
    // Useful for catching errors.

    // ✅ typescript/no-array-delete
    // 💭 Type aware. ⚙️ Default.
    // This rule disallows using the delete operator on array values.
    // Splicing is preferred over delete.

    // ✅ typescript/no-base-to-string
    // 💭 Type aware. ⚙️ Default.
    // This rule requires toString() and toLocaleString() calls to only be called on objects which provide useful
    // information when stringified.
    // JavaScript's `toString()` method returns `'[object Object]'` on plain objects, which is not useful information.

    // ✅ typescript/no-duplicate-enum-values
    // ⚙️ Default.
    // Disallow duplicate enum member values.
    // Enums themselves are discouraged, but this can help spot errors if you are using them.

    // ✅ typescript/no-duplicate-type-constituents
    // 💭 Type aware. ⚙️ Default.
    // This rule disallows duplicate constituents of union or intersection types.
    // This is often a sign you actually used the wrong type.

    // ✅ typescript/no-extra-non-null-assertion
    // ⚙️ Default.
    // Disallow extra non-null assertions.
    // Prevents a useless pattern.

    // ✅ typescript/no-floating-promises
    // 💭 Type aware. ⚙️ Default.
    // This rule disallows "floating" Promises in TypeScript code, which is a Promise that is created without any code
    // to handle its resolution or rejection.
    // Prevents missing to write promise handling logic.

    // ✅ typescript/no-for-in-array
    // 💭 Type aware. ⚙️ Default.
    // This rule disallows iterating over an array with a for-in loop.
    // You almost never want to iterate through an array using for-in instead you are probably looking for for-of.

    // ✅ typescript/no-implied-eval
    // 💭 Type aware. ⚙️ Default.
    // This rule disallows the use of eval-like methods.
    // Certain JS functions, like `setTimeout`, when passed a string instead of a callback, evaluate it using eval.
    // Avoiding eval is good practice because of performance and security reasons.

    // ✅ typescript/no-meaningless-void-operator
    // 💭 Type aware. ⚙️ Default.
    // This rule disallows the void operator when its argument is already of type void or undefined.
    // Doing so is meaningless.

    // ✅ typescript/no-misused-new
    // ⚙️ Default.
    // Enforces valid definitions of new and constructor. This rule prevents classes from defining a method named new,
    // interfaces from defining a method named constructor, and interfaces from defining a construct signature that
    // returns the interface itself.
    // These patterns can cause unexpected bugs.

    // ✅ typescript/no-misused-spread
    // 💭 Type aware. ⚙️ Default.
    // This rule disallows spreading syntax in places where it does not make sense or could cause runtime errors.
    // Prevents misuse of the spread operator.

    // ✅ typescript/no-non-null-asserted-optional-chain
    // ⚙️ Default.
    // Disallow non-null assertions after an optional chain expression.
    // Pattern doesn't make sense.

    // ✅ typescript/no-redundant-type-constituents
    // 💭 Type aware. ⚙️ Default.
    // This rule disallows type constituents of unions and intersections that are redundant.
    // Makes code easier to read.

    // ✅ typescript/no-this-alias
    // ⚙️ Default.
    // Disallow aliasing of this.
    // You should use arrow functions instead, which do not bind `this`.

    // ✅ typescript/no-unnecessary-parameter-property-assignment
    // ⚙️ Default.
    // Prevents unnecessary assignment of parameter properties.
    // Prevents use of a bad pattern.

    // ✅ typescript/no-unsafe-declaration-merging
    // ⚙️ Default.
    // Disallow unsafe declaration merging.
    // Declaration merging between classes and interfaces is unsafe.

    // ✅ typescript/no-unsafe-unary-minus
    // 💭 Type aware. ⚙️ Default.
    // This rule disallows using the unary minus operator on a value which is not of type `number | bigint`.
    // The unary minus operator should only be used on numeric values.

    // ✅ typescript/no-useless-default-assignment
    // 💭 Type aware. ⚙️ Default.
    // Disallow default assignments that can never be used.
    // Eliminates redundant code.

    // ✅ typescript/no-useless-empty-export
    // ⚙️ Default.
    // Disallow empty exports that don't change anything in a module file.
    // Eliminates redundant code.

    // ✅ typescript/no-wrapper-object-types
    // ⚙️ Default.
    // Disallow the use of wrapper object types.
    // These types should not be used.

    // ✅ typescript/prefer-as-const
    // ⚙️ Default.
    // Enforce the use of as const over literal types.
    // `as const` is preferred over literal type assertions.

    // ✅ typescript/prefer-namespace-keyword
    // ⚙️ Default. 🗑️ Deprecated.
    // This rule reports when the module keyword is used instead of namespace.

    // ✅ typescript/require-array-sort-compare
    // 💭 Type aware. ⚙️ Default.
    // This rule requires `Array#sort()` to be called with a comparison function.
    // If the comparator is missing, values are compared as strings leading to unexpected behavior.

    // ✅ typescript/restrict-template-expressions
    // 💭 Type aware. ⚙️ Default.
    // This rule restricts the types allowed in template literal expressions.
    // Values are stringified using `.toString()`, but some values
    // (like objects have no meaningful string representation).

    // ✅ typescript/triple-slash-reference
    // ⚙️ Default.
    // Disallow certain triple slash directives in favor of ES module import declarations.
    // Use of triple-slash reference type directives is generally discouraged in favor of ECMAScript Module imports.

    // ✅ typescript/unbound-method
    // 💭 Type aware. ⚙️ Default.
    // This rule enforces that unbound methods are called with their expected scope.
    // When you extract a method from an object and call it separately, the `this` context is lost. This can lead to
    // runtime errors or unexpected behavior, especially with methods that rely on this to access instance properties or
    // other methods. Useful, but also often results in false positives.

    // -----------------
    // Nursery rules
    // -----------------

    // ✅ typescript/no-unnecessary-condition
    // 💭 Type aware.
    // Disallow conditions that are always truthy, always falsy, or always nullish based on TypeScript's type
    // information.
    // Useful to prevent dead code.
    "typescript/no-unnecessary-condition": "error",

    // ✅ typescript/prefer-optional-chain
    // 💭 Type aware.
    // Enforce using concise optional chain expressions instead of chained logical AND operators, negated logical OR
    // operators, or empty objects.
    // Optional chaining makes code easier to read.
    "typescript/prefer-optional-chain": "error",

    // -----------------
    // Pedantic rules
    // -----------------

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

    // -----------------
    // Restriction rules
    // -----------------

    // ❌ typescript/explicit-function-return-type
    // This rule enforces that functions haĐve an explicit return type annotation.
    // Useful, but too limiting, for complex objects (think wrappers around Redux functions) defining the return type is
    // too challenging.

    // ✅ typescript/explicit-member-accessibility
    // Require explicit accessibility modifiers on class properties and methods.
    // In TS the default access modifier is public, which is more lenient than other languages.
    "typescript/explicit-member-accessibility": "error",

    // ❌ typescript/explicit-module-boundary-types
    // Require explicit return and argument types on exported functions&#39; and classes&#39; public class methods.
    // Useful, but too limiting just like typescript/explicit-function-return-type

    // ✅ typescript/no-dynamic-delete
    // Disallow using the delete operator on computed key expressions.
    // Deleting dynamically computed keys can be dangerous and in some cases not well optimized. Using the delete
    // operator on keys that aren't runtime constants could be a sign that you're using the wrong data structures.
    "typescript/no-dynamic-delete": "error",

    // ✅ typescript/no-empty-object-type
    // To avoid confusion around the `{}` type allowing any non-nullish value, this rule bans usage of the `{}` type.
    // That includes interfaces and object type aliases with no fields.
    // Use of `{}` as a type is usually an error.
    "typescript/no-empty-object-type": "error",

    // ✅ typescript/no-explicit-any
    // Disallows explicit use of the `any` type.
    // The `any` type in TypeScript is a dangerous "escape hatch".
    "typescript/no-explicit-any": "error",

    // ✅ typescript/no-import-type-side-effects
    // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
    // Inline `type` qualifiers still import side effects, which can cause unexpected bugs.
    "typescript/no-import-type-side-effects": "error",

    // ✅ typescript/no-invalid-void-type
    // Disallow `void` type usage outside return types and configured generic contexts.
    // `void` is primarily meaningful in return positions.
    "typescript/no-invalid-void-type": "error",

    // ✅ typescript/no-namespace
    // Disallow TypeScript namespaces.
    // Namespaces are an outdated way to organize TypeScript code.
    "typescript/no-namespace": "error",

    // ❌ typescript/no-non-null-asserted-nullish-coalescing
    // Disallow non-null assertions in the left operand of a nullish coalescing operator.
    // Superseded by typescript/no-non-null-assertion being enabled.

    // ✅ typescript/no-non-null-assertion
    // Disallow non-null assertions using the `!` postfix operator.
    // `!` is an escape hatch and usually indicates, that the code is not fully type-safe.
    "typescript/no-non-null-assertion": "error",

    // ✅ typescript/no-require-imports
    // Forbids the use of CommonJS require calls.
    // ES modules are preferred.
    "typescript/no-require-imports": "error",

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
    "typescript/promise-function-async": "error",

    // ❌ typescript/use-unknown-in-catch-callback-variable
    // This rule enforces using unknown for catch clause variables instead of any.
    // Type of error variable is `unknown` in newer TypeScript versions.

    // -----------------
    // Style rules
    // -----------------

    // ❌ typescript/adjacent-overload-signatures
    // Require that function overload signatures be consecutive.
    // Not useful enough, overload signatures are used rarely and usually used for util functions which can just be
    // moved to separate files to ensure grouping.

    // ✅ typescript/array-type
    // Require consistently using either `T[]` or `Array<>` for arrays.
    // Array literal is preferred.
    "typescript/array-type": "error",

    // ❌ typescript/ban-tslint-comment
    // This rule disallows `tslint:<rule-flag>` comments.
    // Not useful enough.

    // ✅ typescript/class-literal-property-style
    // Enforces a consistent style for exposing literal values on classes.
    // Mixing readonly fields and trivial literal getters for the same kind of value makes class APIs inconsistent and
    // harder to scan.
    "typescript/class-literal-property-style": "error",

    // ✅ typescript/consistent-generic-constructors
    // When constructing a generic class, you can specify the type arguments on either the left-hand side
    // (as a type annotation) or the right-hand side (as part of the constructor call).
    // Inconsistent usage of generic constructors can make the code harder to read and maintain.
    "typescript/consistent-generic-constructors": ["error", "constructor"],

    // ❌ typescript/consistent-indexed-object-style
    // Choose between requiring either Record type or indexed signature types.
    // Too limiting. Sometimes index signature is needed for complex types.

    // ✅ typescript/consistent-type-assertions
    // Enforce consistent usage of TypeScript type assertions.
    // `as` is preferred over angle bracket syntax.
    "typescript/consistent-type-assertions": ["error"],

    // ❌ typescript/consistent-type-definitions
    // Enforce type definitions to consistently use either `interface` or `type`.
    // Too limiting sometimes using `type` is preferred.

    // ✅ typescript/consistent-type-exports
    // 💭 Type aware.
    // Enforce using export type for exports that are only used as types.
    // Mixing type-only exports with value exports without export type makes module intent harder to read and can cause
    // unnecessary runtime export surface.
    "typescript/consistent-type-exports": "error",

    // ✅ typescript/consistent-type-imports
    // Enforce consistent usage of type imports by adding or removing the type keyword from imports.
    // Inconsistent usage of type imports can make the code harder to read and understand.
    "typescript/consistent-type-imports": "error",

    // ✅ typescript/dot-notation
    // Enforce dot notation whenever property access can be written safely as obj.prop.
    // Dot notation is generally more readable and concise than bracket notation for static property names.
    "typescript/dot-notation": "error",

    // ✅ typescript/method-signature-style
    // Enforce using a particular method signature syntax.
    // Property syntax is preferred in TypeScript.
    "typescript/method-signature-style": ["error", "property"],

    // ✅ typescript/no-empty-interface
    // Disallow the declaration of empty interfaces.
    // Using an empty interface is often a sign of programmer error.
    "typescript/no-empty-interface": "error",

    // ✅ typescript/no-inferrable-types
    // Disallow explicit type declarations for variables or parameters initialized to a `number`, `string`, or
    // `boolean`.
    // Explicitly typing variables or parameters that are initialized to a literal value is unnecessary because
    // TypeScript can infer the type from the value.
    "typescript/no-inferrable-types": "error",

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
    "typescript/prefer-find": "error",

    // ❌ typescript/prefer-for-of
    // Enforces the use of a for...of loop instead of a for loop with simple iteration.
    // Not useful enough.

    // ✅ typescript/prefer-function-type
    // Enforce using function types instead of interfaces with call signatures.
    // The function type form is generally preferred when possible for being more succinct and readable
    "typescript/prefer-function-type": "error",

    // ✅ typescript/prefer-readonly
    // 💭 Type aware.
    // Require class members that are never reassigned to be marked readonly.
    // Members that never change should be declared readonly to make class invariants explicit and prevent accidental
    // mutation.
    "typescript/prefer-readonly": "error",

    // ❌ typescript/prefer-reduce-type-parameter
    // 💭 Type aware.
    // This rule prefers using a type parameter for the accumulator in Array#reduce() instead of casting.
    // Superseded by typescript/no-unsafe-type-assertion.

    // ✅ typescript/prefer-regexp-exec
    // 💭 Type aware.
    // Prefer `RegExp#exec()` over `String#match()` when extracting a regex match.
    // `exec()` is more explicit about matching with a regular expression and avoids the overloaded behavior of
    // `String#match()`.
    "typescript/prefer-regexp-exec": "error",

    // ✅ typescript/prefer-return-this-type
    // 💭 Type aware.
    // This rule enforces using `this` types for return types when possible.
    // Classes that have methods which return the instance itself should use `this` as the return type instead of the
    // class name. This provides better type safety for inheritance, as the return type will be the actual subclass type
    // rather than the base class type
    "typescript/prefer-return-this-type": "error",

    // ✅ typescript/prefer-string-starts-ends-with
    // 💭 Type aware.
    // Prefer startsWith and endsWith over manual string boundary checks.
    // Easier to read.
    "typescript/prefer-string-starts-ends-with": "error",

    // ✅ typescript/unified-signatures
    // Disallow overload signatures that can be unified into one.
    // Easier to read.
    "typescript/unified-signatures": "error",

    // -----------------
    // Suspicious rules
    // -----------------

    // ❌ typescript/consistent-return
    // 💭 Type aware.
    // Superseded by TypeScript `compilerOptions.noImplicitReturns`.

    // ❌ typescript/no-confusing-non-null-assertion
    // Disallow non-null assertion in locations that may be confusing.
    // Superseded by typescript/no-unsafe-type-assertion.

    // ✅ typescript/no-extraneous-class
    // This rule reports when a class has no non-static members, such as for a class used exclusively as a static
    // namespace. This rule also reports classes that have only a constructor and no fields. Those classes can generally
    // be replaced with a standalone function.
    // Said construct is pointless, use global functions with namespace import instead.
    "typescript/no-extraneous-class": "error",

    // ✅ typescript/no-unnecessary-boolean-literal-compare
    // 💭 Type aware.
    // This rule disallows unnecessary equality comparisons with boolean literals.
    // Makes code easier to read.
    "typescript/no-unnecessary-boolean-literal-compare": "error",

    // ✅ typescript/no-unnecessary-template-expression
    // 💭 Type aware.
    // Disallows unnecessary template expressions (interpolations) that can be simplified.
    // Static string literal expressions or expressions that are already strings can be simplified.
    "typescript/no-unnecessary-template-expression": "error",

    // ❌ typescript/no-unnecessary-type-arguments
    // 💭 Type aware.
    // Stylistic preference.

    // ✅ typescript/no-unnecessary-type-assertion
    // 💭 Type aware.
    // This rule disallows type assertions that do not change the type of an expression.
    // Type assertions that don't actually change the type of an expression are unnecessary and can be safely removed.
    "typescript/no-unnecessary-type-assertion": "error",

    // ❌ typescript/no-unnecessary-type-constraint
    // 💭 Type aware.
    // Disallow unnecessary constraints on generic types.
    // Not useful enough.

    // ✅ typescript/no-unnecessary-type-conversion
    // 💭 Type aware.
    // Disallow unnecessary type conversion expressions.
    // Type conversions that do not change a value's type or runtime behavior add noise and can obscure intent.
    "typescript/no-unnecessary-type-conversion": "error",

    // ✅ typescript/no-unnecessary-type-parameters
    // 💭 Type aware.
    // Disallow type parameters that are declared but not meaningfully used.
    // Unnecessary type parameters make signatures noisier and harder to understand, and they often hide opportunities
    // to simplify APIs.
    "typescript/no-unnecessary-type-parameters": "error",

    // ✅ typescript/no-unsafe-enum-comparison
    // 💭 Type aware.
    // This rule disallows comparing an enum value with a non-enum value.
    // Enums are discouraged, but this is useful.
    "typescript/no-unsafe-enum-comparison": "error",

    // ✅ typescript/no-unsafe-type-assertion
    // 💭 Type aware.
    // Disallows unsafe type assertions that narrow a type.
    // Type assertions that narrow a type bypass TypeScript's type-checking and can lead to runtime errors. Type
    // assertions that broaden a type are safe because TypeScript essentially knows less about a type. Instead of using
    // type assertions to narrow a type, it's better to rely on type guards, which help avoid potential runtime errors
    // caused by unsafe type assertions.
    "typescript/no-unsafe-type-assertion": "error",
  },
} satisfies OxlintConfig;
