import type { OxlintConfig } from "oxlint";

export const eslintConfig = {
  plugins: ["eslint"],
  rules: {
    // -- Correctness rules --
    // Oxlint enables all correctness rules by default.

    // -- Nursery rules --
    // ❌ eslint/no-restricted-exports
    // Disallows specified names from being used as exported names.
    // Useful, but only really useful on a project level.

    // ❌ eslint/no-undef
    // Disallow the use of undeclared variables.
    // Already handled by TypeScript.

    // ❌ eslint/no-unreachable-loop
    // Disallow loops whose body allows only one iteration.
    // Not useful enough.

    // ❌ eslint/no-useless-assignment
    // Flags assignments where the newly assigned value is never read afterward (a "dead store"). This helps catch
    // wasted work or accidental mistakes.
    // Not useful enough.

    // -- Pedantic rules --
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

    // -- Perf rules --

    // ✅ eslint/no-await-in-loop
    // Disallows the use of await within loop bodies. (for, for-in, for-of, while, do-while).
    // Potentially indicates that the async operations are not being effectively parallelized.
    "eslint/no-await-in-loop": "error",

    // ✅ eslint/no-useless-call
    // Disallow unnecessary .call() and .apply() methods.
    // These are slower.
    "eslint/no-useless-call": "error",

    // -----------------
    // Restriction rules
    // -----------------

    // ❌ eslint/class-methods-use-this
    // Enforce class methods to use this.
    // Not useful enough.

    // ❌ eslint/default-case
    // Require default cases in switch statements.
    // Sometimes it's valid to not have a default case.

    // ✅ eslint/no-alert
    // Disallow use of the alert function.
    // Alert and similar functions are obtrusive and should be replaced with dedicated UI elements.
    "eslint/no-alert": "error",

    // ✅ eslint/no-bitwise
    // Disallow bitwise operators.
    // These operators are rarely used and usually are typos of boolean operators.
    "eslint/no-bitwise": "error",

    // ✅ eslint/no-console
    // Disallow the use of console.
    // It is bad practice to use console.log in production code.
    "eslint/no-console": "error",

    // ❌ eslint/no-div-regex
    // Disallow division operators explicitly at the beginning of regular expressions.
    // Not useful enough.

    // ✅ eslint/no-empty
    // Disallow empty block statements.
    // Usually a sign of incomplete code.
    "eslint/no-empty": "error",

    // ✅ eslint/no-empty-function
    // Disallows the usage of empty functions.
    // Can lead to confusion it is better to define a dedicated variable that represents this. E.g., NOOP_VOID_FUNCTION.
    "eslint/no-empty-function": "error",

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
    "no-regex-spaces": "error",

    // ✅ eslint/no-restricted-globals
    // Disallow specified global variables.
    // Useful to prevent mixing up shadowed variables.
    "eslint/no-restricted-globals": ["error", "event"],

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
    "eslint/no-var": "error",

    // ❌ eslint/no-void
    // Disallow void operators.
    // Too restrictive, void is useful with async functions you don't want to await.

    // ❌ eslint/unicode-bom
    // Disallow the use of byte order mark.
    // UTF-8 is the standard for text files, thus BOM is not needed.
    "eslint/unicode-bom": "error",

    // -----------
    // Style rules
    // -----------

    // ✅ eslint/arrow-body-style
    // This rule can enforce or disallow the use of braces around the arrow function body.
    // Using concise syntax when applicable can make code more readable.
    "eslint/arrow-body-style": "error",

    // ❌ eslint/capitalized-comments
    // Enforces or disallows capitalization of the first letter of a comment.
    // Not useful enough.

    // ✅ eslint/curly
    // Enforces the use of curly braces {} for all control statements.
    // Omitting curly braces can reduce code readability and increase the likelihood of errors, especially in deeply
    // nested or indented code.
    "eslint/curly": "error",

    // ✅ eslint/default-case-last
    // Requires the default clause in switch statements to be the last one.
    // The convention is to put the default clause at the end of switch statements.
    "eslint/default-case-last": "error",

    // ❌ eslint/default-param-last
    // Requires default parameters in functions to be the last ones.
    // Superseded by TypeScript.

    // ✅ eslint/func-name-matching
    // Requires function expression names to match the variable or property names they are assigned to.
    // Matching names keep stack traces and source code easier to connect.
    "eslint/func-name-matching": "error",

    // ✅ eslint/func-names
    // Require or disallow named function expressions.
    // Leaving the name off a function will cause <anonymous> to appear in stack traces of errors thrown in it or any
    // function called within it.
    // Omitting is allowed when the name can be inferred.
    "eslint/func-names": ["error", "as-needed"],

    // ✅ eslint/func-style
    // Enforce the consistent use of either function declarations or expressions assigned to variables.
    // Function declaration is preferred over function expressions.
    // Function expression is permitted when it has a type annotation.
    "eslint/func-style": [
      "error",
      "declaration",
      {
        allowTypeAnnotation: true,
      },
    ],

    // ✅ eslint/grouped-accessor-pairs
    // Require grouped accessor pairs in object literals and classes.
    // It's good practice to group accessors.
    "eslint/grouped-accessor-pairs": "error",

    // ✅ eslint/guard-for-in
    // Require for-in loops to include an if statement.
    // For in lists all keys in the prototype chain of an object, causing unexpected items to show up.
    "eslint/guard-for-in": "error",

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
    "eslint/new-cap": "error",

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
    "eslint/no-lone-blocks": "error",

    // ❌ eslint/no-magic-numbers
    // This rule aims to make code more readable and refactoring easier by ensuring that special numbers are declared as constants.
    // Too limiting.

    // ✅ eslint/no-multi-assign
    // Disallow use of chained assignment expressions.
    // Chained assignment is hard to read, so it's better to avoid it.
    "eslint/no-multi-assign": "error",

    // ❌ eslint/no-multi-str
    // Disallow multiline strings.
    // Too limiting, they are sometimes useful.

    // ✅ eslint/no-nested-ternary
    // Disallow nested ternary expressions.
    // Nested ternaries are hard to read.
    "eslint/no-nested-ternary": "error",

    // ✅ eslint/no-new-func
    // Disallow the use of new with Function constructor.
    // Using new with Function leads to hard-to-read and insecure code.
    "eslint/no-new-func": "error",

    // ✅ eslint/no-return-assign
    // Disallows assignment operators in return statements.
    // Usually a typo for comparison.
    "eslint/no-return-assign": "error",

    // ✅ eslint/no-script-url
    // Disallow `javascript:` urls.
    // Security problems
    "eslint/no-script-url": "error",

    // ✅ eslint/no-template-curly-in-string
    // Disallow template literal placeholder syntax in regular strings.
    // Useful to prevent accidentally leaving template placeholders in strings.
    "eslint/no-template-curly-in-string": "error",

    // ❌ eslint/no-ternary
    // Disallow ternary operators.
    // Too limiting.

    // ✅ eslint/no-useless-computed-key
    // Disallow unnecessary computed property keys in objects and classes.
    // They are unnecessary and make code harder to read.
    "eslint/no-useless-computed-key": "error",

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
    "eslint/prefer-arrow-callback": "error",

    // ✅ eslint/prefer-const
    // Require const declarations for variables that are never reassigned after initialization.
    // Makes reading code easier.
    "eslint/prefer-const": "error",

    // ❌ eslint/prefer-destructuring
    // Require destructuring from arrays and/or objects.
    // Too limiting.

    // ✅ eslint/prefer-exponentiation-operator
    // Disallow the use of Math.pow in favor of the ** operator.
    // More readable.
    "eslint/prefer-exponentiation-operator": "error",

    // ✅ eslint/prefer-named-capture-group
    // Enforces the use of named capture groups in regular expressions.
    // More readable.
    "eslint/prefer-named-capture-group": "error",

    // ✅ eslint/prefer-numeric-literals
    // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals.
    // Literals are more readable over function calls.
    "eslint/prefer-numeric-literals": "error",

    // ❌ eslint/prefer-object-has-own
    // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call().
    // Not useful enough.

    // ❌ eslint/prefer-object-spread
    // Disallow using Object.assign() with an object literal as the first argument.
    // Not useful enough.

    // ✅ eslint/prefer-regex-literals
    // Disallow use of the RegExp constructor in favor of regular expression literals.
    // Literals are more readable.
    "eslint/prefer-regex-literals": "error",

    // ❌ eslint/prefer-rest-params
    // Require rest parameters instead of arguments.
    // Not useful enough.

    // ❌ eslint/prefer-spread
    // Require spread syntax instead of .apply().
    // Not useful enough.

    // ✅ eslint/prefer-template
    // Require template literals instead of string concatenation.
    // Templates offer better performance and are easier to read.
    "eslint/prefer-template": "error",

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

    // ----------------
    // Suspicious rules
    // ----------------

    // ❌ eslint/block-scoped-var
    // Enforces that variables are both declared and used within the same block scope.
    // Hoisted variables declarations are already disabled.

    // ✅ eslint/no-extend-native
    // Disallow extending native objects.
    // Can lead to unexpected bugs.
    "eslint/no-extend-native": "error",

    // ❌ eslint/no-extra-bind
    // Disallow unnecessary calls to .bind().
    // Not useful enough.

    // ✅ eslint/no-implied-eval
    // Disallow the use of eval()-like methods.
    // Enabled by default.

    // ✅ eslint/no-new
    // Disallow the use of the new operator when not part of an assignment or comparison.
    // Not storing and using the newly created object is often a bug.
    "eslint/no-new": "error",

    // ❌ eslint/no-shadow
    // Disallow variable declarations from shadowing variables declared in the outer scope.
    // Too restrictive.

    // ❌ eslint/no-underscore-dangle
    // Disallow identifiers that start with underscore.
    // Too restrictive. It is useful to indicate that a variable is purposefully unused by prefixing with an underscore.

    // ❌ eslint/no-unexpected-multiline
    // Disallow confusing multiline expressions
    "eslint/no-unexpected-multiline": "error",

    // ❌ eslint/no-unmodified-loop-condition
    // Disallow references in loop conditions that are never modified within the loop.
    // This can lead to infinite loops.
    "eslint/no-unmodified-loop-condition": "error",

    // ✅ eslint/no-unneeded-ternary
    // Disallow ternary operators when simpler alternatives exist.
    // Makes code more readable.
    "eslint/no-unneeded-ternary": "error",

    // ❌ eslint/no-useless-concat
    // Disallow unnecessary concatenation of literals or template literals.
    // Superseded by eslint/prefer-template

    // ❌ eslint/no-useless-constructor
    // Disallow constructors that can be safely removed without changing how the class works.
    // Not useful enough.

    // ✅ eslint/preserve-caught-error
    // Enforces that when re-throwing an error in a catch block, the original error is preserved using the `cause`
    // property.
    // Re-throwing an error without preserving the original error loses important debugging information.
    "eslint/preserve-caught-error": "error",
  },
} satisfies OxlintConfig;
