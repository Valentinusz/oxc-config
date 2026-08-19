import type { OxlintConfig } from 'oxlint';

export const eslintRestriction = {
  rules: {
    // ✅ eslint/class-methods-use-this
    // Enforce class methods to use this.
    // 🏆 Best practice.

    // ✅ eslint/default-case
    // Require default cases in switch statements.
    // 🐛 Bug prevention. Omitting the default case might lead to unexpected problems.

    // ✅ eslint/no-alert
    // Disallow the use of `alert` and similar functions.
    // 🏆 Best practice. These functions are obtrusive and should be replaced with dedicated UI elements.
    'eslint/no-alert': 'error',

    // ✅ eslint/no-bitwise
    // Disallow bitwise operators.
    // 🐛 Bug prevention. These operators are rarely used and usually are typos of boolean operators.
    'eslint/no-bitwise': 'error',

    // ✅ eslint/no-console
    // Disallow the use of console.
    // 🏆 Best practice. It is bad practice to use console.log in production code. Error is allowed.
    'eslint/no-console': ['error', { allow: ['error'] }],

    // ❌ eslint/no-div-regex
    // Disallow division operators explicitly at the beginning of regular expressions. Characters /= at the beginning of
    // a regular expression literal can be confused with a division assignment operator.
    // Not useful enough.

    // ✅ eslint/no-empty
    // Disallow empty block statements.
    // 🐛 Bug prevention. Usually a sign of incomplete code.
    'eslint/no-empty': 'error',

    // ✅ eslint/no-empty-function
    // Disallows the usage of empty functions.
    // Can lead to confusion, it is better to define a dedicated variable that represents this.
    // E.g., NOOP_VOID_FUNCTION.
    // 🐛 Bug prevention. Usually a sign of incomplete code.
    'eslint/no-empty-function': 'error',

    // ❌ eslint/no-eq-null
    // Disallow null comparisons without type-checking operators.
    // ️️➡️ Handled by eslint/eqeqeq.

    // ❌ eslint/no-implicit-globals
    // Disallows declarations in the global scope.
    // ️➡️ Handled through the use of ES modules.

    // ✅ eslint/no-param-reassign
    // Disallow reassigning function parameters or, optionally, their properties.
    // 🐛 Bug prevention. Makes code harder to read, because you have to follow the entire method body to see how a
    // param might be reassigned.
    'eslint/no-param-reassign': 'error',

    // ❌ eslint/no-plusplus
    // Disallow the unary operators ++ and --.
    // 🔒 Too restrictive.

    // ✅ eslint/no-proto
    // Disallow the use of the `__proto__` property.
    // 🏆 Best practice. `__proto__` is deprecated.
    'eslint/no-proto': 'error',

    // ✅ eslint/no-regex-spaces
    // Disallow 2+ consecutive spaces in regular expressions.
    // 🏆 Best practice. A regex quantifier is preferred.
    'no-regex-spaces': 'error',

    // ✅ eslint/no-restricted-globals
    // Disallow specified global variables.
    // 🐛 Bug prevention. Useful to prevent mixing up shadowed variables. E.g. `event` global should always be shadowed
    // by the local event parameter of an event handler.
    'eslint/no-restricted-globals': ['error', 'event'],

    // ❌ eslint/no-restricted-imports
    // Allows you to specify imports that you don’t want to use in your application.
    // 📁 Useful on project level.

    // ❌ eslint/no-restricted-properties
    // Disallow certain properties on certain objects.
    // 📁 Useful on project level.

    // ✅ eslint/no-sequences
    // Disallow comma operators.
    // 🐛 Bug prevention. Rarely useful, leads to confusion.
    'eslint/no-sequences': 'error',

    // ❌ eslint/no-undefined
    // Disallow the use of the undefined value.
    // 🔒 Too restrictive. Leads to problems when using libraries that don't follow this rule.

    // ❌ eslint/no-use-before-define
    // Disallows using variables before they are defined.
    // ➡️ Handled by TypeScript.

    // ✅ eslint/no-var
    // Disables `var`.
    // 🏆 Best practice. `let` and `const` are preferred because they scope the variable to the current block.
    'eslint/no-var': 'error',

    // ❌ eslint/no-void
    // Disallow void operators.
    // 🔒 Too restrictive, void is useful with async functions you don't want to await.

    // ✅ eslint/unicode-bom
    // Disallow the use of byte order mark.
    // UTF-8 is the standard for text files, thus BOM is not needed.
    'eslint/unicode-bom': 'error',
  },
} satisfies OxlintConfig;
