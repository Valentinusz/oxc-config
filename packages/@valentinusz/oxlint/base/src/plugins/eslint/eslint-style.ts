import type { OxlintConfig } from 'oxlint';

export const eslintStyleConfig = {
  rules: {
    // ✅ eslint/arrow-body-style
    // This rule can enforce or disallow the use of braces around the arrow function body.
    // Using concise syntax when applicable can make code more readable.
    'eslint/arrow-body-style': 'error',

    // ❌ eslint/capitalized-comments
    // Enforces or disallows capitalization of the first letter of a comment.
    // Not useful enough.

    // ✅ eslint/curly
    // Enforces the use of curly braces {} for all control statements.
    // Omitting curly braces can reduce code readability and increase the likelihood of errors, especially in deeply
    // nested or indented code.
    'eslint/curly': 'error',

    // ✅ eslint/default-case-last
    // Requires the default clause in switch statements to be the last one.
    // The convention is to put the default clause at the end of switch statements.
    'eslint/default-case-last': 'error',

    // ❌ eslint/default-param-last
    // Requires default parameters in functions to be the last ones.
    // Superseded by TypeScript.

    // ✅ eslint/func-name-matching
    // Requires function expression names to match the variable or property names they are assigned to.
    // Matching names keep stack traces and source code easier to connect.
    'eslint/func-name-matching': 'error',

    // ✅ eslint/func-names
    // Require or disallow named function expressions.
    // Leaving the name off a function will cause <anonymous> to appear in stack traces of errors thrown in it or any
    // function called within it.
    // Omitting is allowed when the name can be inferred.
    'eslint/func-names': ['error', 'as-needed'],

    // ✅ eslint/func-style
    // Enforce the consistent use of either function declarations or expressions assigned to variables.
    // Function declaration is preferred over function expressions.
    // Function expression is permitted when it has a type annotation.
    'eslint/func-style': [
      'error',
      'declaration',
      {
        allowTypeAnnotation: true,
      },
    ],

    // ✅ eslint/grouped-accessor-pairs
    // Require grouped accessor pairs in object literals and classes.
    // It's good practice to group accessors.
    'eslint/grouped-accessor-pairs': 'error',

    // ✅ eslint/guard-for-in
    // Require for-in loops to include an if statement.
    // For in lists all keys in the prototype chain of an object, causing unexpected items to show up.
    'eslint/guard-for-in': 'error',

    // ❌ eslint/id-denylist
    // Disallow specified identifiers.
    // Useful but should be managed on a project level.

    // ❌ eslint/id-length
    // Enforce a minimum and/or maximum identifier length convention by counting the graphemes for a given identifier.
    // Useful but should be managed on a project level.

    // ❌ eslint/id-match
    // Enforces a naming convention for identifiers by requiring each checked name to match a configured regular
    // expression.
    // Useful but should be managed on a project level.

    // ❌ eslint/init-declarations
    // Require or disallow initialization in variable declarations.
    // Too limiting.

    // ❌ eslint/logical-assignment-operators
    // This rule requires or disallows logical assignment operator shorthand.
    // These are rarely used, so this rule doesn't provide enough value.

    // ❌ eslint/max-params
    // Enforce a maximum number of parameters in function definitions which by default is three.
    // Useful but should be managed on a project level.

    // ❌ eslint/max-statements
    // Enforce a maximum number of statements in a function.
    // Useful but should be managed on a project level.

    // ✅ eslint/new-cap
    // Requires constructor names to begin with a capital letter.
    // Accepted convention.
    'eslint/new-cap': 'error',

    // ❌ eslint/no-continue
    // The continue statement terminates execution of the statements in the current iteration of the current or labeled
    // loop.
    // Too limiting.

    // ❌ eslint/no-duplicate-imports
    // Disallow duplicate module imports.
    // Superseded by TypeScript.

    // ❌ eslint/no-extra-label
    // Disallow unnecessary labels.
    // Rarely used.

    // ❌ eslint/no-implicit-coercion
    // Disallow implicit type conversions.
    // Too limiting.

    // ❌ eslint/no-label-var
    // Disallow labels that share a name with a variable.
    // Not useful enough.

    // ❌ eslint/no-labels
    // Disallow labeled statements.
    // Too limiting.

    // ❌ eslint/no-lone-blocks
    // Disallows unnecessary standalone block statements.
    // Usually a sign of incomplete code.
    'eslint/no-lone-blocks': 'error',

    // ❌ eslint/no-magic-numbers
    // This rule aims to make code more readable and refactoring easier by ensuring that special numbers are declared as constants.
    // Too limiting.

    // ✅ eslint/no-multi-assign
    // Disallow use of chained assignment expressions.
    // Chained assignment is hard to read, so it's better to avoid it.
    'eslint/no-multi-assign': 'error',

    // ❌ eslint/no-multi-str
    // Disallow multiline strings.
    // Too limiting, they are sometimes useful.

    // ✅ eslint/no-nested-ternary
    // Disallow nested ternary expressions.
    // Nested ternaries are hard to read.
    'eslint/no-nested-ternary': 'error',

    // ✅ eslint/no-new-func
    // Disallow the use of new with Function constructor.
    // Using new with Function leads to hard-to-read and insecure code.
    'eslint/no-new-func': 'error',

    // ✅ eslint/no-return-assign
    // Disallows assignment operators in return statements.
    // Usually a typo for comparison.
    'eslint/no-return-assign': 'error',

    // ✅ eslint/no-script-url
    // Disallow `javascript:` urls.
    // Security problems
    'eslint/no-script-url': 'error',

    // ✅ eslint/no-template-curly-in-string
    // Disallow template literal placeholder syntax in regular strings.
    // Useful to prevent accidentally leaving template placeholders in strings.
    'eslint/no-template-curly-in-string': 'error',

    // ❌ eslint/no-ternary
    // Disallow ternary operators.
    // Too limiting.

    // ✅ eslint/no-useless-computed-key
    // Disallow unnecessary computed property keys in objects and classes.
    // They are unnecessary and make code harder to read.
    'eslint/no-useless-computed-key': 'error',

    // ❌ eslint/object-shorthand
    // Require or disallow method and property shorthand syntax for object literals.
    // Stylistic preference.

    // ❌ eslint/one-var
    // Enforces variables to be declared either together or separately.
    // Too limiting.

    // ❌ eslint/operator-assignment
    // Require assignment operator shorthand where possible.
    // Stylistic preference.

    // ✅ eslint/prefer-arrow-callback
    // Requires using arrow functions for callbacks.
    // Easier to read.
    'eslint/prefer-arrow-callback': 'error',

    // ✅ eslint/prefer-const
    // Require const declarations for variables that are never reassigned after initialization.
    // Makes reading code easier.
    'eslint/prefer-const': 'error',

    // ❌ eslint/prefer-destructuring
    // Require destructuring from arrays and/or objects.
    // Too limiting.

    // ✅ eslint/prefer-exponentiation-operator
    // Disallow the use of Math.pow in favor of the ** operator.
    // More readable.
    'eslint/prefer-exponentiation-operator': 'error',

    // ✅ eslint/prefer-named-capture-group
    // Enforces the use of named capture groups in regular expressions.
    // More readable.
    'eslint/prefer-named-capture-group': 'error',

    // ✅ eslint/prefer-numeric-literals
    // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals.
    // Literals are more readable over function calls.
    'eslint/prefer-numeric-literals': 'error',

    // ❌ eslint/prefer-object-has-own
    // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call().
    // Not useful enough.

    // ❌ eslint/prefer-object-spread
    // Disallow using Object.assign() with an object literal as the first argument.
    // Not useful enough.

    // ✅ eslint/prefer-regex-literals
    // Disallow use of the RegExp constructor in favor of regular expression literals.
    // Literals are more readable.
    'eslint/prefer-regex-literals': 'error',

    // ❌ eslint/prefer-rest-params
    // Require rest parameters instead of arguments.
    // Not useful enough.

    // ❌ eslint/prefer-spread
    // Require spread syntax instead of .apply().
    // Not useful enough.

    // ✅ eslint/prefer-template
    // Require template literals instead of string concatenation.
    // Templates offer better performance and are easier to read.
    'eslint/prefer-template': 'error',

    // ❌ eslint/sort-imports
    // This rule checks all import declarations and verifies that all imports are first sorted by the used member syntax.
    // Superseded by Oxfmt.

    // ❌ eslint/sort-keys
    // When declaring multiple properties, sorting property names alphabetically makes it easier to find and/or diff.
    // Too limiting. Sometimes you want an explicit key order.

    // ❌ eslint/vars-on-top
    // Require var declarations to be placed at the top of their scope.
    // Use of var is disabled.

    // ❌ eslint/yoda
    // Require or disallow "Yoda" conditions. This rule aims to enforce a consistent style of conditions.
    // Stylistic preference.
  },
} satisfies OxlintConfig;
