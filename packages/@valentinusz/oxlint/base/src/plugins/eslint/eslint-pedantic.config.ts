import type { OxlintConfig } from 'oxlint';

export const eslintPedanticConfig = {
  rules: {
    // ❌ eslint/accessor-pairs
    // Enforces getter/setter pairs in objects and classes.
    // 🔒 Too restrictive. sometimes getter without a setter is reasonable.

    // ✅ eslint/array-callback-return
    // Enforce return statements in callbacks of array methods.
    // 🐛 Bug prevention. Usually omitting return from an array function is a mistake.
    'eslint/array-callback-return': 'error',

    // ✅ eslint/eqeqeq
    // Requires the use of the === and !== operators, disallowing the use of == and !=. === is also required for null,
    // because x == null is also true if x is undefined.
    // 🐛 Bug prevention. It's easy to mix up == and ===, which can lead to bugs due to unexpected type conversions.
    'eslint/eqeqeq': 'error',

    // ❌ eslint/max-classes-per-file
    // Enforce a maximum number of classes per file.
    // 🔒 Too restrictive. Should be left up to the developer.

    // ❌ eslint/max-depth
    // Enforce a maximum depth that blocks can be nested.
    // 🔒 Too restrictive. Should be left up to the developer.

    // ❌ eslint/max-lines-per-function
    // Enforce a maximum number of lines of code in a function.
    // 🔒 Too restrictive. Should be left up to the developer.

    // ❌ eslint/max-nested-callbacks
    // Enforce a maximum depth that callbacks can be nested.
    // 🔒 Too restrictive. Should be left up to the developer.

    // ✅ eslint/no-array-constructor
    // Disallow Array constructors.
    // 🏆 Best practice. Literal is preferred for defining an array.
    'eslint/no-array-constructor': 'error',

    // ✅ eslint/no-case-declarations
    // Disallow labels that share a name with a variable.
    // 🐛 Bug prevention. Usually a sign the programmer forgot the open a new block for the switch case.
    'eslint/no-case-declarations': 'error',

    // ✅ eslint/no-constructor-return
    // Disallow return statements in class constructors.
    // 🐛 Bug prevention. Usually a sign the programmer copy-pasted code into the constructor but forgot to reread it.
    'eslint/no-constructor-return': 'error',

    // ✅ eslint/no-else-return
    // Disallow else blocks after return statements in if statements.
    // 🏆 Best practice.
    'eslint/no-else-return': 'error',

    // ✅ eslint/no-fallthrough
    // Disallow fallthrough of case statements.
    // 🐛 Bug prevention. Fallthrough can easily lead to bugs, but is useful when two cases have the exact same
    // handling.
    'eslint/no-fallthrough': ['error', { allowEmptyCase: true }],

    // ❌ eslint/no-inline-comments
    // Disallow inline comments after code.
    // 🔒 Too restrictive. Sometimes it's useful.

    // ❌ eslint/no-inner-declarations
    // Disallow variable or function declarations in nested blocks.
    // 🔒 Too restrictive. Sometimes it's useful to declare a function or variable in a block.

    // ✅ eslint/no-lonely-if
    // Disallow if statements as the only statement in else blocks.
    // 👀 Readability. Merging these into an `else-if` reduce nesting.
    'eslint/no-lonely-if': 'error',

    // ❌ eslint/no-loop-func
    // Disallow function declarations that contain unsafe references inside loop statements.
    // ➡️ Handled by eslint/no-var.

    // ❌ eslint/no-negated-condition
    // Disallow negated conditions.
    // 🔒 Too restrictive. Sometimes negated form is simpler.

    // ✅ eslint/no-new-wrappers
    // Disallow new operators with the String, Number, and Boolean objects.
    // 🐛 Bug prevention. Primitive wrappers are not useful and behave weirdly.
    'eslint/no-new-wrappers': ['error'],

    // ✅ eslint/no-object-constructor
    // Disallow calls to the Object constructor without an argument.
    // 🏆 Best practice. Using an empty object literal (`{}`) is preferred.
    'eslint/no-object-constructor': 'off',

    // ✅ eslint/no-promise-executor-return
    // Disallow returning values from Promise executor functions.
    // 🐛 Bug prevention. Executor function should not return anything and instead use resolve / reject.
    'eslint/no-promise-executor-return': 'error',

    // ✅ eslint/no-prototype-builtins
    // Disallow calling some Object.prototype methods directly on objects.
    // 🐛 Bug prevention. Guards against a very specific bug.
    'eslint/no-prototype-builtins': 'error',

    // ❌ eslint/no-redeclare
    // Disallows redeclaring variables within the same scope.
    // ➡️ Handled by TypeScript.

    // ✅ eslint/no-self-compare
    // Disallow comparisons where both sides are exactly the same.
    // 🐛 Bug prevention. This is almost always and artifact on an unfinished refactor or unreverted debugging.
    'eslint/no-self-compare': 'error',

    // ❌ eslint/no-throw-literal
    // Disallow throwing literals as exceptions.
    // ➡️ Handled by typescript/only-throw-error.

    // ❌ eslint/no-useless-return
    // Disallows redundant return statements.
    // 👀 Readability. Explicit returns are clearer.

    // 🟧 eslint/no-warning-comments
    // Disallows warning comments such as TODO, FIXME, XXX in code.
    // ℹ️ These comments are useful, but should be brought to developer attention.
    'eslint/no-warning-comments': 'warn',

    // ❌ eslint/prefer-promise-reject-errors
    // Require using Error objects as Promise rejection reasons.
    // ➡️ Handled by typescript/prefer-promise-reject-errors.

    // ✅ eslint/radix
    // Enforce the use of the radix parameter when using parseInt().
    // 🐛 Bug prevention. When omitted radix is determined automatically, leading to unpredictable results.
    'eslint/radix': 'error',

    // ✅ eslint/require-await
    // Disallow async functions which have no `await` expression.
    // 🏆 Best practice. Usually signals that the function can be made synchronous.
    'eslint/require-await': 'error',

    // ✅ eslint/require-unicode-regexp
    // Enforce the use of `u` or `v` flag on regular expressions.
    // 🐛 Bug prevention. Makes UTF-16 comparisons function correctly, prevents silently ignoring regexp syntax errors.
    'eslint/require-unicode-regexp': 'error',

    // ❌ eslint/sort-vars
    // Enforce sorting of variable declarations within the same block.
    // Stylistic preference.

    // ✅ eslint/symbol-description
    // Require symbol descriptions.
    // 🏆 Best practice. Improves debugging.
    'eslint/symbol-description': 'error',
  },
} satisfies OxlintConfig;
