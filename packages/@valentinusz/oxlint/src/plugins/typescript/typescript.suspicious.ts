import type { OxlintConfig } from 'oxlint';

export const typescriptSuspicious = {
  rules: {
    // ❌ typescript/consistent-return
    // 💭 Type aware.
    // ➡️ Handled by TypeScript `compilerOptions.noImplicitReturns`.

    // ❌ typescript/no-confusing-non-null-assertion
    // Disallow non-null assertion in locations that may be confusing.
    // ➡️ Handled by typescript/no-unsafe-type-assertion.

    // ✅ typescript/no-extraneous-class
    // This rule reports when a class has no non-static members, such as for a class used exclusively as a static
    // namespace. This rule also reports classes that have only a constructor and no fields. Those classes can generally
    // be replaced with a standalone function.
    // Said construct is pointless, use global functions with namespace import instead.
    // 🏆 Best practice.
    'typescript/no-extraneous-class': 'error',

    // ✅ typescript/no-unnecessary-boolean-literal-compare
    // 💭 Type aware.
    // This rule disallows unnecessary equality comparisons with boolean literals.
    // 🏆 Best practice.
    'typescript/no-unnecessary-boolean-literal-compare': 'error',

    // ✅ typescript/no-unnecessary-template-expression
    // 💭 Type aware.
    // Disallows unnecessary template expressions (interpolations) that can be simplified.
    // 🏆 Best practice. Static string literal expressions or expressions that are already strings can be simplified.
    'typescript/no-unnecessary-template-expression': 'error',

    // ❌ typescript/no-unnecessary-type-arguments
    // 💭 Type aware.
    // Stylistic preference.

    // ✅ typescript/no-unnecessary-type-assertion
    // 💭 Type aware.
    // This rule disallows type assertions that do not change the type of an expression.
    // Type assertions that don't actually change the type of an expression are unnecessary and can be safely removed.
    'typescript/no-unnecessary-type-assertion': 'error',

    // ❌ typescript/no-unnecessary-type-constraint
    // 💭 Type aware.
    // Disallow unnecessary constraints on generic types.
    // Not useful enough.

    // ✅ typescript/no-unnecessary-type-conversion
    // 💭 Type aware.
    // Disallow unnecessary type conversion expressions.
    // 🏆 Best practice. Type conversions that do not change a value's type or runtime behavior add noise and can
    // obscure intent.
    'typescript/no-unnecessary-type-conversion': 'error',

    // ✅ typescript/no-unnecessary-type-parameters
    // 💭 Type aware.
    // Disallow type parameters that are declared but not meaningfully used.
    // 🏆 Best practice. Unnecessary type parameters make signatures noisier and harder to understand, and they often
    // hide opportunities to simplify APIs.
    'typescript/no-unnecessary-type-parameters': 'error',

    // ✅ typescript/no-unsafe-enum-comparison
    // 💭 Type aware.
    // This rule disallows comparing an enum value with a non-enum value.
    // 🐛 Bug prevention. Enums are discouraged, but this is useful.
    'typescript/no-unsafe-enum-comparison': 'error',

    // ✅ typescript/no-unsafe-type-assertion
    // 💭 Type aware.
    // Disallows unsafe type assertions that narrow a type.
    // 🐛 Bug prevention. Type assertions that narrow a type bypass TypeScript's type-checking and can lead to runtime errors. Type
    // assertions that broaden a type are safe because TypeScript essentially knows less about a type. Instead of using
    // type assertions to narrow a type, it's better to rely on type guards, which help avoid potential runtime errors
    // caused by unsafe type assertions.
    'typescript/no-unsafe-type-assertion': 'error',
  },
} satisfies OxlintConfig;
