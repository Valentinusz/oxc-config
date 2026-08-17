import type { OxlintConfig } from "oxlint";

export const eslintPedanticConfig = {
  rules: {
    // ❌ eslint/accessor-pairs
    // Enforces getter/setter pairs in objects and classes.
    // Too restrictive, sometimes getter without a setter is reasonable.

    // ✅ eslint/array-callback-return
    // Enforce return statements in callbacks of array methods.
    // Useful, usually omitting return from an array function is a mistake.

    // ✅ eslint/eqeqeq
    // Requires the use of the === and !== operators, disallowing the use of == and !=.
    // It's easy to mix up == and ===, which can lead to bugs due to unexpected type conversions.
    // === is also required for null, because x == null is also true if x is undefined
    "eslint/eqeqeq": ["error"],

    // ❌ eslint/max-classes-per-file
    // Enforce a maximum number of classes per file.
    // Too restrictive. Should be left up to the developer.

    // ❌ eslint/max-depth
    // Enforce a maximum depth that blocks can be nested.
    // Too restrictive. Should be left up to the developer.

    // ❌ eslint/max-lines-per-function
    // Enforce a maximum number of lines of code in a function.
    // Too restrictive. Should be left up to the developer.

    // ❌ eslint/max-nested-callbacks
    // Enforce a maximum depth that callbacks can be nested.
    // Too restrictive. Should be left up to the developer.

    // ✅ eslint/no-array-constructor
    // Disallow Array constructors.
    // Literal is preferred for defining an array.
    "eslint/no-array-constructor": "error",

    // ✅ eslint/no-case-declarations
    // Disallow labels that share a name with a variable.
    // Usually a sign the programmer forgot the open a new block for the switch case.
    "eslint/no-case-declarations": "error",

    // ✅ eslint/no-constructor-return
    // Disallow return statements in class constructors.
    // Usually a sign the programmer copy-pasted code into the constructor but forgot to reread it.
    "eslint/no-constructor-return": "error",

    // ❌ eslint/no-else-return
    // Disallow else blocks after return statements in if statements.
    // Not useful enough.

    // ✅ eslint/no-fallthrough
    // Disallow fallthrough of case statements.
    // Fallthrough can easily lead to bugs, but is useful when two cases have the exact same handling.
    "eslint/no-fallthrough": ["error", { allowEmptyCase: true }],

    // ❌ eslint/no-inline-comments
    // Disallow inline comments after code.
    // Not useful enough.

    // ❌ eslint/no-inner-declarations
    // Disallow variable or function declarations in nested blocks.
    // Too restrictive. Sometimes it's useful to declare a function or variable in a block.

    // ❌ eslint/no-lonely-if
    // Disallow if statements as the only statement in else blocks.
    // Not useful enough.

    // ❌ eslint/no-loop-func
    // Disallow function declarations that contain unsafe references inside loop statements.
    // Not useful enough.

    // ❌ eslint/no-negated-condition
    // Disallow negated conditions.
    // Too restrictive.

    // ✅ eslint/no-negated-condition
    // Disallow new operators with the String, Number, and Boolean objects.
    // Can lead to unexpected bugs.
    "eslint/no-new-wrappers": ["error"],

    // ✅ eslint/no-object-constructor
    // Disallow calls to the Object constructor without an argument.
    // This is only useful for creating empty objects, for which {} is preferred.
    "eslint/no-object-constructor": "off",

    // ✅ eslint/no-promise-executor-return
    // Disallow returning values from Promise executor functions.
    // Executor function should not return anything and instead use resolve / reject.
    "eslint/no-promise-executor-return": "error",

    // ❌ eslint/no-prototype-builtins
    // Disallow calling some Object.prototype methods directly on objects.
    // Too restrictive.

    // ❌ eslint/no-redeclare
    // Disallows redeclaring variables within the same scope.
    // Already handled by TypeScript.

    // ❌ eslint/no-self-compare
    // Disallow comparisons where both sides are exactly the same.
    // This is always a bug.
    "eslint/no-self-compare": "error",

    // ❌ eslint/no-throw-literal
    // Disallow throwing literals as exceptions.
    // Deprecated rule.

    // ✅ eslint/no-useless-return
    // Disallows redundant return statements.
    // Makes code more readable.
    "eslint/no-useless-return": "error",

    // ⚠️ eslint/no-warning-comments
    // Disallows warning comments such as TODO, FIXME, XXX in code.
    // These comments are useful, but should be brought to developer attention.
    "eslint/no-warning-comments": "warn",

    // ❌ eslint/prefer-promise-reject-errors
    // Require using Error objects as Promise rejection reasons.
    // Superseded by typescript/prefer-promise-reject-errors.

    // ✅ eslint/radix
    // Enforce the use of the radix parameter when using parseInt().
    // Omitting reads to radix being determined automatically, which might lead to unpredictable results.
    "eslint/radix": "error",

    // ✅ eslint/require-await
    // Disallow async functions which have no await expression.
    // Usually missing await is a sign of a mistake.
    "eslint/require-await": "error",

    // ✅ eslint/require-unicode-regexp
    // Enforce the use of u or v flag on regular expressions.
    // Makes UTF-16 comparisons function correctly, prevents silently ignoring syntax errors.
    "eslint/require-unicode-regexp": "error",

    // ❌ eslint/sort-vars
    // Enforce sorting of variable declarations within the same block.
    // Not useful enough.

    // ✅ eslint/symbol-description
    // Require symbol descriptions.
    // Improves debugging.
    "eslint/symbol-description": "error",
  },
} satisfies OxlintConfig;
