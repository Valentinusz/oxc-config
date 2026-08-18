import type { OxlintConfig } from 'oxlint';

export const eslintRestrictionConfig = {
  rules: {
    // ❌ eslint/class-methods-use-this
    // Enforce class methods to use this.
    // Not useful enough.

    // ❌ eslint/default-case
    // Require default cases in switch statements.
    // Sometimes it's valid to not have a default case.

    // ✅ eslint/no-alert
    // Disallow use of the alert function.
    // Alert and similar functions are obtrusive and should be replaced with dedicated UI elements.
    'eslint/no-alert': 'error',

    // ✅ eslint/no-bitwise
    // Disallow bitwise operators.
    // These operators are rarely used and usually are typos of boolean operators.
    'eslint/no-bitwise': 'error',

    // ✅ eslint/no-console
    // Disallow the use of console.
    // It is bad practice to use console.log in production code.
    'eslint/no-console': 'error',

    // ❌ eslint/no-div-regex
    // Disallow division operators explicitly at the beginning of regular expressions.
    // Not useful enough.

    // ✅ eslint/no-empty
    // Disallow empty block statements.
    // Usually a sign of incomplete code.
    'eslint/no-empty': 'error',

    // ✅ eslint/no-empty-function
    // Disallows the usage of empty functions.
    // Can lead to confusion it is better to define a dedicated variable that represents this. E.g., NOOP_VOID_FUNCTION.
    'eslint/no-empty-function': 'error',

    // ❌ eslint/no-eq-null
    // Disallow null comparisons without type-checking operators.
    // Already handled by eqeqeq.

    // ❌ eslint/no-implicit-globals
    // Disallows declarations in the global scope.
    // Too restrictive.

    // ✅ eslint/no-param-reassign
    // Disallow reassigning function parameters or, optionally, their properties.
    // Leads to confusion.

    // ❌ eslint/no-plusplus
    // Disallow the unary operators ++ and --.
    // Too restrictive.

    // ❌ eslint/no-proto
    // Disallow the use of the __proto__ property.
    // Not useful enough.

    // ✅ eslint/no-regex-spaces
    // Disallow 2+ consecutive spaces in regular expressions.
    // Useful for readability.
    'no-regex-spaces': 'error',

    // ✅ eslint/no-restricted-globals
    // Disallow specified global variables.
    // Useful to prevent mixing up shadowed variables.
    'eslint/no-restricted-globals': ['error', 'event'],

    // ❌ eslint/no-restricted-imports
    // Allows you to specify imports that you don’t want to use in your application.
    // Useful but should be set on a project level.

    // ❌ eslint/no-restricted-properties
    // Disallow certain properties on certain objects.
    // Useful but should be set on a project level.

    // ❌ eslint/no-sequences
    // Disallow comma operators.
    // Rarely useful, leads to confusion.

    // ❌ eslint/no-undefined
    // Disallow the use of the undefined value.
    // Too restrictive. Leads to problems when using libraries that don't follow this rule.

    // ❌ eslint/no-use-before-define
    // Disallows using variables before they are defined.
    // Already handled by TypeScript.

    // ✅ eslint/no-var
    // Disables var.
    // let and const are preferred because they scope the variable to the current block.
    'eslint/no-var': 'error',

    // ❌ eslint/no-void
    // Disallow void operators.
    // Too restrictive, void is useful with async functions you don't want to await.

    // ❌ eslint/unicode-bom
    // Disallow the use of byte order mark.
    // UTF-8 is the standard for text files, thus BOM is not needed.
    'eslint/unicode-bom': 'error',
  },
} satisfies OxlintConfig;
