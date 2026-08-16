import type { OxlintConfig } from "oxlint";

export const typescriptConfig = {
  plugins: ["typescript"],
  rules: {
    // -----------------
    // Correctness rules
    // -----------------

    // ✅ typescript/await-thenable
    // This rule disallows awaiting a value that is not a Thenable.
    "typescript/await-thenable": "error",

    // ✅ typescript/no-array-delete
    // This rule disallows using the delete operator on array values.
    "typescript/no-array-delete": "error",

    // ✅ typescript/no-base-to-string
    // This rule requires toString() and toLocaleString() calls to only be called on objects which provide useful information when stringified.
    "typescript/no-base-to-string": "error",

    // ✅ typescript/no-duplicate-enum-values
    // Disallow duplicate enum member values.
    "typescript/no-duplicate-enum-values": "error",

    // ✅ typescript/no-duplicate-type-constituents
    // This rule disallows duplicate constituents of union or intersection types.
    "typescript/no-duplicate-type-constituents": "error",

    // ✅ typescript/no-extra-non-null-assertion
    // Disallow extra non-null assertions.
    "typescript/no-extra-non-null-assertion": "error",

    // ✅ typescript/no-floating-promises
    // This rule disallows &quot;floating&quot; Promises in TypeScript code, which is a Promise that is created without any code to handle its resolution or rejection.
    "typescript/no-floating-promises": "error",

    // ✅ typescript/no-for-in-array
    // This rule disallows iterating over an array with a for-in loop.
    "typescript/no-for-in-array": "error",

    // ✅ typescript/no-implied-eval
    // This rule disallows the use of eval-like methods.
    "typescript/no-implied-eval": "error",

    // ✅ typescript/no-meaningless-void-operator
    // This rule disallows the void operator when its argument is already of type void or undefined.
    "typescript/no-meaningless-void-operator": "error",

    // ✅ typescript/no-misused-new
    // Enforces valid definitions of new and constructor. This rule prevents classes from defining a method named new, interfaces from defining a method named constructor, and interfaces from defining a construct signature that returns the interface itself.
    "typescript/no-misused-new": "error",

    // ✅ typescript/no-misused-spread
    // This rule disallows spreading syntax in places where it doesn&#39;t make sense or could cause runtime errors.
    "typescript/no-misused-spread": "error",

    // ✅ typescript/no-non-null-asserted-optional-chain
    // Disallow non-null assertions after an optional chain expression.
    "typescript/no-non-null-asserted-optional-chain": "error",

    // ✅ typescript/no-redundant-type-constituents
    // This rule disallows type constituents of unions and intersections that are redundant.
    "typescript/no-redundant-type-constituents": "error",

    // ✅ typescript/no-this-alias
    // Disallow aliasing of this.
    "typescript/no-this-alias": "error",

    // ✅ typescript/no-unnecessary-parameter-property-assignment
    // Prevents unnecessary assignment of parameter properties.
    "typescript/no-unnecessary-parameter-property-assignment": "error",

    // ✅ typescript/no-unsafe-declaration-merging
    // Disallow unsafe declaration merging.
    "typescript/no-unsafe-declaration-merging": "error",

    // ✅ typescript/no-unsafe-unary-minus
    // This rule disallows using the unary minus operator on a value which is not of type &#39;number&#39; | &#39;bigint&#39;.
    "typescript/no-unsafe-unary-minus": "error",

    // ✅ typescript/no-useless-default-assignment
    // Disallow default assignments that can never be used.
    "typescript/no-useless-default-assignment": "error",

    // ✅ typescript/no-useless-empty-export
    // Disallow empty exports that don&#39;t change anything in a module file.
    "typescript/no-useless-empty-export": "error",

    // ✅ typescript/no-wrapper-object-types
    // Disallow the use of wrapper object types.
    "typescript/no-wrapper-object-types": "error",

    // ✅ typescript/prefer-as-const
    // Enforce the use of as const over literal types.
    "typescript/prefer-as-const": "error",

    // ✅ typescript/prefer-namespace-keyword
    // This rule reports when the module keyword is used instead of namespace. This rule does not report on the use of TypeScript module declarations to describe external APIs (declare module &#39;foo&#39; {}).
    "typescript/prefer-namespace-keyword": "error",

    // ✅ typescript/require-array-sort-compare
    // This rule requires Array#sort() to be called with a comparison function.
    "typescript/require-array-sort-compare": "error",

    // ✅ typescript/restrict-template-expressions
    // This rule restricts the types allowed in template literal expressions.
    "typescript/restrict-template-expressions": "error",

    // ✅ typescript/triple-slash-reference
    // Disallow certain triple slash directives in favor of ES module import declarations.
    "typescript/triple-slash-reference": "error",

    // ✅ typescript/unbound-method
    // This rule enforces that unbound methods are called with their expected scope.
    "typescript/unbound-method": "error",
    // -----------------
    // Nursery rules
    // -----------------

    // ✅ typescript/no-unnecessary-condition
    // Disallow conditions that are always truthy, always falsy, or always nullish based on TypeScript&#39;s type information.
    "typescript/no-unnecessary-condition": "error",

    // ✅ typescript/prefer-optional-chain
    // Enforce using concise optional chain expressions instead of chained logical AND operators, negated logical OR operators, or empty objects.
    "typescript/prefer-optional-chain": "error",
    // -----------------
    // Pedantic rules
    // -----------------

    // ✅ typescript/ban-ts-comment
    // This rule lets you set which directive comments you want to allow in your codebase.
    "typescript/ban-ts-comment": "error",

    // ✅ typescript/ban-types
    // This rule bans specific types and can suggest alternatives. Note that it does not ban the corresponding runtime objects from being used.
    "typescript/ban-types": "error",

    // ✅ typescript/no-confusing-void-expression
    // This rule forbids using void expressions in confusing locations such as arrow function returns.
    "typescript/no-confusing-void-expression": "error",

    // ✅ typescript/no-deprecated
    // Disallow using code marked as @deprecated.
    "typescript/no-deprecated": "error",

    // ✅ typescript/no-misused-promises
    // This rule forbids providing Promises to logical locations such as if statements in places where the TypeScript compiler allows them but they are not handled properly. These situations can often arise due to a missing await keyword or just a misunderstanding of the way async functions are handled/awaited.
    "typescript/no-misused-promises": "error",

    // ✅ typescript/no-mixed-enums
    // This rule disallows enums from having both string and numeric members.
    "typescript/no-mixed-enums": "error",

    // ✅ typescript/no-unsafe-argument
    // This rule disallows calling a function with an argument which is typed as any.
    "typescript/no-unsafe-argument": "error",

    // ✅ typescript/no-unsafe-assignment
    // This rule disallows assigning a value with type any to variables and properties.
    "typescript/no-unsafe-assignment": "error",

    // ✅ typescript/no-unsafe-call
    // This rule disallows calling a value with type any.
    "typescript/no-unsafe-call": "error",

    // ✅ typescript/no-unsafe-function-type
    // Disallow using the unsafe built-in Function type.
    "typescript/no-unsafe-function-type": "error",

    // ✅ typescript/no-unsafe-member-access
    // This rule disallows member access on a value with type any.
    "typescript/no-unsafe-member-access": "error",

    // ✅ typescript/no-unsafe-return
    // This rule disallows returning a value with type any from a function.
    "typescript/no-unsafe-return": "error",

    // ✅ typescript/only-throw-error
    // This rule disallows throwing non-Error values.
    "typescript/only-throw-error": "error",

    // ✅ typescript/prefer-enum-initializers
    // Require each enum member value to be explicitly initialized.
    "typescript/prefer-enum-initializers": "error",

    // ✅ typescript/prefer-includes
    // Enforce using .includes() instead of .indexOf() !== -1 or /regex/.test().
    "typescript/prefer-includes": "error",

    // ✅ typescript/prefer-nullish-coalescing
    // Enforce using the nullish coalescing operator (??) instead of logical OR (||) or conditional expressions when the left operand might be null or undefined.
    "typescript/prefer-nullish-coalescing": "error",

    // ✅ typescript/prefer-promise-reject-errors
    // This rule enforces passing an Error object to Promise.reject().
    "typescript/prefer-promise-reject-errors": "error",

    // ✅ typescript/prefer-readonly-parameter-types
    // Require function and method parameters to use readonly-compatible types.
    "typescript/prefer-readonly-parameter-types": "error",

    // ✅ typescript/prefer-ts-expect-error
    // Enforce using @ts-expect-error over @ts-ignore.
    "typescript/prefer-ts-expect-error": "error",

    // ✅ typescript/related-getter-setter-pairs
    // This rule enforces that getters and setters for the same property are defined together and have related types.
    "typescript/related-getter-setter-pairs": "error",

    // ✅ typescript/require-await
    // This rule disallows async functions which do not have an await expression.
    "typescript/require-await": "error",

    // ✅ typescript/restrict-plus-operands
    // This rule requires both operands of addition to be the same type and be number, string, or any.
    "typescript/restrict-plus-operands": "error",

    // ✅ typescript/return-await
    // This rule enforces consistent returning of awaited values from async functions.
    "typescript/return-await": "error",

    // ✅ typescript/strict-boolean-expressions
    // Disallow certain types in boolean expressions.
    "typescript/strict-boolean-expressions": "error",

    // ✅ typescript/strict-void-return
    // Disallow returning non-void values where a void return is expected.
    "typescript/strict-void-return": "error",

    // ✅ typescript/switch-exhaustiveness-check
    // This rule requires switch statements to be exhaustive when switching on union types.
    "typescript/switch-exhaustiveness-check": "error",
    // -----------------
    // Restriction rules
    // -----------------

    // ✅ typescript/explicit-function-return-type
    // This rule enforces that functions have an explicit return type annotation.
    "typescript/explicit-function-return-type": "error",

    // ✅ typescript/explicit-member-accessibility
    // Require explicit accessibility modifiers on class properties and methods.
    "typescript/explicit-member-accessibility": "error",

    // ✅ typescript/explicit-module-boundary-types
    // Require explicit return and argument types on exported functions&#39; and classes&#39; public class methods.
    "typescript/explicit-module-boundary-types": "error",

    // ✅ typescript/no-dynamic-delete
    // Disallow using the delete operator on computed key expressions.
    "typescript/no-dynamic-delete": "error",

    // ✅ typescript/no-empty-object-type
    // To avoid confusion around the {} type allowing any non-nullish value, this rule bans usage of the {} type. That includes interfaces and object type aliases with no fields.
    "typescript/no-empty-object-type": "error",

    // ✅ typescript/no-explicit-any
    // Disallows explicit use of the any type.
    "typescript/no-explicit-any": "error",

    // ✅ typescript/no-import-type-side-effects
    // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
    "typescript/no-import-type-side-effects": "error",

    // ✅ typescript/no-invalid-void-type
    // Disallow void type usage outside return types and configured generic contexts.
    "typescript/no-invalid-void-type": "error",

    // ✅ typescript/no-namespace
    // Disallow TypeScript namespaces.
    "typescript/no-namespace": "error",

    // ✅ typescript/non-nullable-type-assertion-style
    // This rule prefers a non-null assertion over an explicit type cast for non-nullable types.
    "typescript/non-nullable-type-assertion-style": "error",

    // ✅ typescript/no-non-null-asserted-nullish-coalescing
    // Disallow non-null assertions in the left operand of a nullish coalescing operator.
    "typescript/no-non-null-asserted-nullish-coalescing": "error",

    // ✅ typescript/no-non-null-assertion
    // Disallow non-null assertions using the ! postfix operator.
    "typescript/no-non-null-assertion": "error",

    // ✅ typescript/no-require-imports
    // Forbids the use of CommonJS require calls.
    "typescript/no-require-imports": "error",

    // ✅ typescript/no-restricted-types
    // Disallow certain types from being used.
    "typescript/no-restricted-types": "error",

    // ✅ typescript/no-var-requires
    // Disallow require statements except in import statements.
    "typescript/no-var-requires": "error",

    // ✅ typescript/prefer-literal-enum-member
    // Explicit enum values must only be literal values (string, number, boolean, etc.).
    "typescript/prefer-literal-enum-member": "error",

    // ✅ typescript/promise-function-async
    // This rule requires any function or method that returns a Promise to be marked as async.
    "typescript/promise-function-async": "error",

    // ✅ typescript/use-unknown-in-catch-callback-variable
    // This rule enforces using unknown for catch clause variables instead of any.
    "typescript/use-unknown-in-catch-callback-variable": "error",
    // -----------------
    // Style rules
    // -----------------

    // ✅ typescript/adjacent-overload-signatures
    // Require that function overload signatures be consecutive.
    "typescript/adjacent-overload-signatures": "error",

    // ✅ typescript/array-type
    // Require consistently using either T[] or Array&lt;T&gt; for arrays.
    "typescript/array-type": "error",

    // ✅ typescript/ban-tslint-comment
    // This rule disallows tslint:&lt;rule-flag&gt; comments.
    "typescript/ban-tslint-comment": "error",

    // ✅ typescript/class-literal-property-style
    // Enforces a consistent style for exposing literal values on classes.
    "typescript/class-literal-property-style": "error",

    // ✅ typescript/consistent-generic-constructors
    // When constructing a generic class, you can specify the type arguments on either the left-hand side (as a type annotation) or the right-hand side (as part of the constructor call).
    "typescript/consistent-generic-constructors": "error",

    // ✅ typescript/consistent-indexed-object-style
    // Choose between requiring either Record type or indexed signature types.
    "typescript/consistent-indexed-object-style": "error",

    // ✅ typescript/consistent-type-assertions
    // Enforce consistent usage of TypeScript type assertions.
    "typescript/consistent-type-assertions": "error",

    // ✅ typescript/consistent-type-definitions
    // Enforce type definitions to consistently use either interface or type.
    "typescript/consistent-type-definitions": "error",

    // ✅ typescript/consistent-type-exports
    // Enforce using export type for exports that are only used as types.
    "typescript/consistent-type-exports": "error",

    // ✅ typescript/consistent-type-imports
    // Enforce consistent usage of type imports by adding or removing the type keyword from imports.
    "typescript/consistent-type-imports": "error",

    // ✅ typescript/dot-notation
    // Enforce dot notation whenever property access can be written safely as obj.prop.
    "typescript/dot-notation": "error",

    // ✅ typescript/method-signature-style
    // Enforce using a particular method signature syntax.
    "typescript/method-signature-style": "error",

    // ✅ typescript/no-empty-interface
    // Disallow the declaration of empty interfaces.
    "typescript/no-empty-interface": "error",

    // ✅ typescript/no-inferrable-types
    // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    "typescript/no-inferrable-types": "error",

    // ✅ typescript/no-unnecessary-qualifier
    // Disallow namespace qualifiers when the referenced name is already in scope.
    "typescript/no-unnecessary-qualifier": "error",

    // ✅ typescript/parameter-properties
    // Requires or disallows parameter properties in class constructors.
    "typescript/parameter-properties": "error",

    // ✅ typescript/prefer-find
    // Prefer .find(...) over .filter(...)[0] for retrieving a single element.
    "typescript/prefer-find": "error",

    // ✅ typescript/prefer-for-of
    // Enforces the use of a for...of loop instead of a for loop with simple iteration.
    "typescript/prefer-for-of": "error",

    // ✅ typescript/prefer-function-type
    // Enforce using function types instead of interfaces with call signatures.
    "typescript/prefer-function-type": "error",

    // ✅ typescript/prefer-readonly
    // Require class members that are never reassigned to be marked readonly.
    "typescript/prefer-readonly": "error",

    // ✅ typescript/prefer-reduce-type-parameter
    // This rule prefers using a type parameter for the accumulator in Array#reduce() instead of casting.
    "typescript/prefer-reduce-type-parameter": "error",

    // ✅ typescript/prefer-regexp-exec
    // Prefer RegExp#exec() over String#match() when extracting a regex match.
    "typescript/prefer-regexp-exec": "error",

    // ✅ typescript/prefer-return-this-type
    // This rule enforces using this types for return types when possible.
    "typescript/prefer-return-this-type": "error",

    // ✅ typescript/prefer-string-starts-ends-with
    // Prefer startsWith and endsWith over manual string boundary checks.
    "typescript/prefer-string-starts-ends-with": "error",

    // ✅ typescript/unified-signatures
    // Disallow overload signatures that can be unified into one.
    "typescript/unified-signatures": "error",
    // -----------------
    // Suspicious rules
    // -----------------

    // ✅ typescript/consistent-return
    // Enforce consistent return behavior in functions.
    "typescript/consistent-return": "error",

    // ✅ typescript/no-confusing-non-null-assertion
    // Disallow non-null assertion in locations that may be confusing.
    "typescript/no-confusing-non-null-assertion": "error",

    // ✅ typescript/no-extraneous-class
    // This rule reports when a class has no non-static members, such as for a class used exclusively as a static namespace. This rule also reports classes that have only a constructor and no fields. Those classes can generally be replaced with a standalone function.
    "typescript/no-extraneous-class": "error",

    // ✅ typescript/no-unnecessary-boolean-literal-compare
    // This rule disallows unnecessary equality comparisons with boolean literals.
    "typescript/no-unnecessary-boolean-literal-compare": "error",

    // ✅ typescript/no-unnecessary-template-expression
    // Disallows unnecessary template expressions (interpolations) that can be simplified.
    "typescript/no-unnecessary-template-expression": "error",

    // ✅ typescript/no-unnecessary-type-arguments
    // This rule disallows type arguments that are identical to the default type parameter.
    "typescript/no-unnecessary-type-arguments": "error",

    // ✅ typescript/no-unnecessary-type-assertion
    // This rule disallows type assertions that do not change the type of an expression.
    "typescript/no-unnecessary-type-assertion": "error",

    // ✅ typescript/no-unnecessary-type-constraint
    // Disallow unnecessary constraints on generic types.
    "typescript/no-unnecessary-type-constraint": "error",

    // ✅ typescript/no-unnecessary-type-conversion
    // Disallow unnecessary type conversion expressions.
    "typescript/no-unnecessary-type-conversion": "error",

    // ✅ typescript/no-unnecessary-type-parameters
    // Disallow type parameters that are declared but not meaningfully used.
    "typescript/no-unnecessary-type-parameters": "error",

    // ✅ typescript/no-unsafe-enum-comparison
    // This rule disallows comparing an enum value with a non-enum value.
    "typescript/no-unsafe-enum-comparison": "error",

    // ✅ typescript/no-unsafe-type-assertion
    // Disallows unsafe type assertions that narrow a type.
    "typescript/no-unsafe-type-assertion": "error",
  },
} satisfies OxlintConfig;
