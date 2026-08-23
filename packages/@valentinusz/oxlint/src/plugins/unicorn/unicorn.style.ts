import type { OxlintConfig } from 'oxlint';

export const unicornStyle = {
  rules: {
    // ✅ unicorn/catch-error-name
    // This rule enforces consistent and descriptive naming for error variables in catch statements, preventing the use
    // of vague names like badName or _ when the error is used.
    // 🏆 Best practice.
    'unicorn/catch-error-name': 'error',

    // ✅ unicorn/consistent-date-clone
    // The Date constructor can clone a Date object directly when passed as an argument, making timestamp conversion
    // unnecessary. This rule enforces the use of the direct Date cloning instead of using .getTime() for conversion.
    // 🏆 Best practice.
    'unicorn/consistent-date-clone': 'error',

    // ❌ unicorn/consistent-existence-index-check
    // Enforce consistent style for element existence checks with indexOf(), lastIndexOf(), findIndex(), and
    // findLastIndex(). This ensures that comparisons are performed in a standard and clear way.
    // Not useful enough.

    // ❌ unicorn/consistent-template-literal-escape
    // Enforce consistent style for escaping `${` in template literals.
    // Not useful enough.

    // ✅ unicorn/custom-error-definition
    // Enforces the only valid way of Error subclassing. It works with any super class that ends in Error.
    // 🏆 Best practice.
    'unicorn/custom-error-definition': 'error',

    // ❌ unicorn/empty-brace-spaces
    // Removes the extra spaces or new line characters inside a pair of braces that does not contain additional code.
    // This ensures that braces are clean and do not contain unnecessary spaces or newlines.
    // ➡️ Handled by Oxfmt.

    // ✅ unicorn/error-message
    // Enforces providing a message when creating built-in Error objects to improve readability and debugging.
    // 🏆 Best practice.
    'unicorn/error-message': 'error',

    // ❌ unicorn/explicit-timer-delay
    // Enforce or disallow explicit delay argument for setTimeout() and setInterval().
    // Not useful enough.

    // ✅ unicorn/filename-case
    // Enforces a consistent case style for filenames to improve project organization and maintainability. By default,
    // kebab-case is enforced.
    // 🏆 Best practice.
    'unicorn/filename-case': 'error',

    // ❌ unicorn/max-nested-calls
    // Limit the depth of nested calls.
    // 📁 Project specific.

    // ❌ unicorn/no-array-method-this-argument
    // Disallows the use of the thisArg parameter in array iteration methods such as map, filter, some, every, and
    // similar.
    // ➡️ Handled by TypeScript.

    // ❌ unicorn/no-await-expression-member
    // Disallows member access from await expressions.
    // Not useful enough.

    // ❌ unicorn/no-console-spaces
    // Disallows leading/trailing space inside console.log() and similar methods.
    // Not useful enough.

    // ❌ unicorn/no-nested-ternary
    // Disallow deeply nested ternary expressions.
    // ➡️ Handled by eslint/no-nested-ternary.

    // ❌ unicorn/no-null
    // Disallow the use of the null literal, to encourage using undefined instead.
    // ⛓️ Too restrictive.

    // ✅ unicorn/no-unreadable-array-destructuring
    // Disallows destructuring values from an array in ways that are difficult to read.
    // 🏆 Best practice.
    'unicorn/no-unreadable-array-destructuring': 'error',

    // ❌ unicorn/no-useless-collection-argument
    // Disallow useless values or fallbacks in Set, Map, WeakSet, or WeakMap.
    // Not useful enough.

    // ❌ unicorn/no-zero-fractions
    // Prevents the use of zero fractions.
    // Not useful enough.

    // ❌ unicorn/number-literal-case
    // This rule enforces proper case for numeric literals.
    // Not useful enough.

    // ✅ unicorn/numeric-separators-style
    // Enforces a convention of grouping digits using numeric separators.
    // 🏆 Best practice.
    'unicorn/numeric-separators-style': 'error',

    // ✅ unicorn/prefer-array-index-of
    // Enforces using indexOf or lastIndexOf instead of findIndex or findLastIndex when the callback is a simple strict
    // equality comparison.
    // 🏆 Best practice.
    'unicorn/prefer-array-index-of': 'error',

    // ✅ unicorn/prefer-bigint-literals
    // Requires using BigInt literals (e.g. 123n) instead of calling the BigInt() constructor with literal arguments
    // such as numbers or numeric strings.
    // 🏆 Best practice.
    'unicorn/prefer-bigint-literals': 'error',

    // ✅ unicorn/prefer-class-fields
    // Prefers class field declarations over this assignments in constructors for static values.
    // 🏆 Best practice.
    'unicorn/prefer-class-fields': 'error',

    // ✅ unicorn/prefer-classlist-toggle
    // Prefers the use of element.classList.toggle(className, condition) over conditional add/remove patterns.
    // 🏆 Best practice.
    'unicorn/prefer-classlist-toggle': 'error',

    // ✅ unicorn/prefer-default-parameters
    // Instead of reassigning a function parameter, default parameters should be used. The foo = foo || 123 statement
    // evaluates to 123 when foo is falsy, possibly leading to confusing behavior, whereas default parameters only apply
    // when passed an undefined value. This rule only reports reassignments to literal values.
    // 🏆 Best practice.
    'unicorn/prefer-default-parameters': 'error',

    // ✅ unicorn/prefer-dom-node-text-content
    // Enforces the use of .textContent over .innerText for DOM nodes.
    // 🏆 Best practice.
    'unicorn/prefer-dom-node-text-content': 'error',

    // ✅ unicorn/prefer-export-from
    // When re-exporting from a module, it's unnecessary to import and then export. It can be done in a single
    // export from declaration.
    // 🏆 Best practice.
    'unicorn/prefer-export-from': 'error',

    // ✅ unicorn/prefer-global-this
    // Enforces the use of globalThis instead of environment‑specific global object aliases (window, self, or global).
    // 🏆 Best practice.
    'unicorn/prefer-global-this': 'error',

    // ✅ unicorn/prefer-includes
    // Prefer includes() over indexOf() when checking for existence/non-existence. All built-ins have .includes() in
    // addition to .indexOf().
    // 🏆 Best practice.
    'unicorn/prefer-includes': 'error',

    // ✅ unicorn/prefer-keyboard-event-key
    // Enforces the use of KeyboardEvent#key over KeyboardEvent#keyCode, which is deprecated.
    // 🏆 Best practice.
    'unicorn/prefer-keyboard-event-key': 'error',

    // ✅ unicorn/prefer-logical-operator-over-ternary
    // This rule finds ternary expressions that can be simplified to a logical operator.
    // 🏆 Best practice.
    'unicorn/prefer-logical-operator-over-ternary': 'error',

    // ✅ unicorn/prefer-modern-dom-apis
    // 🏆 Best practice.
    'unicorn/prefer-modern-dom-apis': 'error',

    // ✅ unicorn/prefer-negative-index
    // Prefer using a negative index over .length - index when possible.
    // 🏆 Best practice.
    'unicorn/prefer-negative-index': 'error',

    // ✅ unicorn/prefer-object-from-entries
    // Encourages using Object.fromEntries when converting an array of key-value pairs into an object.
    // 🏆 Best practice.
    'unicorn/prefer-object-from-entries': 'error',

    // ✅ unicorn/prefer-optional-catch-binding
    // Prefers omitting the catch binding parameter if it is unused.
    // 🏆 Best practice.
    'unicorn/prefer-optional-catch-binding': 'error',

    // ✅ unicorn/prefer-reflect-apply
    // Disallows the use of Function.prototype.apply() and suggests using Reflect.apply() instead.
    // 🏆 Best practice.
    'unicorn/prefer-reflect-apply': 'error',

    // ✅ unicorn/prefer-response-static-json
    // Enforces the use of Response.json() over new Response(JSON.stringify()).
    // 🏆 Best practice.
    'unicorn/prefer-response-static-json': 'error',

    // ✅ unicorn/prefer-spread
    // Enforces the use of the spread operator (...) over outdated patterns.
    // 🏆 Best practice.
    'unicorn/prefer-spread': 'error',

    // ✅ unicorn/prefer-string-raw
    // Prefers use of String.raw to avoid escaping \.
    // 🏆 Best practice.
    'unicorn/prefer-string-raw': 'error',

    // ❌ unicorn/prefer-string-trim-start-end
    // String#trimLeft() and String#trimRight() are aliases of String#trimStart() and String#trimEnd(). This is to
    // ensure consistency and use direction-independent wording.
    // Not useful enough.

    // ✅ unicorn/prefer-structured-clone
    // Prefer using structuredClone to create a deep clone.
    // 🏆 Best practice.
    'unicorn/prefer-structured-clone': 'error',

    // ❌ unicorn/prefer-ternary
    // Prefers ternary expressions over simple if/else statements.
    // Stylistic preference.

    // ❌ unicorn/relative-url-style
    // Enforce consistent relative URL style.
    // Not useful enough.

    // ❌ unicorn/require-array-join-separator
    // Enforce using the separator argument with Array#join().
    // Not useful enough.

    // ✅ unicorn/require-module-attributes
    // This rule enforces a non-empty attribute list in import/export statements and import() expressions.
    // 🏆 Best practice.
    'unicorn/require-module-attributes': 'error',

    // ✅ unicorn/switch-case-braces
    // Requires empty switch cases to omit braces, while non-empty cases must use braces. This reduces visual clutter
    // for empty cases and enforces proper scoping for non-empty ones.
    // 🏆 Best practice.
    'unicorn/switch-case-braces': 'error',

    // ✅ unicorn/switch-case-break-position
    // Enforce consistent break/return/continue/throw position in case clauses.
    // 🐛 Bug prevention.
    'unicorn/switch-case-break-position': 'error',

    // ❌ unicorn/text-encoding-identifier-case
    // This rule enforces consistent casing for text encoding identifiers, specifically:
    // Not useful enough.

    // ✅ unicorn/throw-new-error
    // This rule makes sure you always use new when throwing an error.
    // 🐛 Bug prevention.
    'unicorn/throw-new-error': 'error',
  },
} satisfies OxlintConfig;
