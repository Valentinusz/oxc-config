import type { OxlintConfig } from "oxlint";

export const unicornPedanticConfig = {
  rules: {
    // ❌ unicorn/consistent-assert
    // Enforces consistent usage of the assert module.
    // Not useful enough.

    // ❌ unicorn/consistent-empty-array-spread
    // When spreading a ternary in an array, we can use both `[]` and `''` as fallbacks, but it's better to have
    // consistent types in both branches.
    // Not useful enough.

    // ❌ unicorn/escape-case
    // Enforces defining escape sequence values with uppercase characters rather than lowercase ones. This promotes readability by making the escaped value more distinguishable from the identifier.
    // Not useful enough.

    // ❌ unicorn/explicit-length-check
    // Enforce explicitly comparing the length or size property of a value.
    // Not useful enough.

    // ❌ unicorn/new-for-builtins
    // Enforces the use of new for given builtins.
    // Not useful enough.

    // ✅ unicorn/no-array-callback-reference
    // Prevents passing a function reference directly to iterator methods.
    // Passing functions to iterator methods can cause issues when the function is changed without realizing that the
    // iterator passes 2 more parameters to it (index and array). This can lead to unexpected behavior when the function
    // signature changes.
    "unicorn/no-array-callback-reference": "error",

    // ❌ unicorn/no-hex-escape
    // Enforces a convention of using Unicode escapes instead of hexadecimal escapes for consistency and clarity.
    // Not useful enough.

    // ✅ unicorn/no-immediate-mutation
    // Disallows mutating a variable immediately after initialization.
    // When you initialize a variable and immediately mutate it, it's cleaner to include the mutation in the
    // initialization. This makes the code more readable and reduces the number of statements.
    "unicorn/no-immediate-mutation": "error",

    // ✅ unicorn/no-instanceof-array
    // Require `Array.isArray()` instead of `instanceof Array`.
    // `Array.isArray()` works more consistently across different environments.
    "unicorn/no-instanceof-array": "error",

    // ✅ unicorn/no-lonely-if
    // Disallow if statements as the only statement in if blocks without else.
    // More readable.
    "unicorn/no-lonely-if": "error",

    // ❌ unicorn/no-negated-condition
    // Disallow negated conditions.
    // Too limiting sometimes the negated condition shows intent better or is simpler.

    // ✅ unicorn/no-negation-in-equality-check
    // Disallow negated expressions on the left of (in)equality checks.
    // A negated expression on the left of an (in)equality check is likely a mistake from trying to negate the whole
    // condition.
    "unicorn/no-negation-in-equality-check": "error",

    // ❌ unicorn/no-new-buffer
    // Disallows the deprecated new Buffer() constructor.
    // Not useful enough.

    // ✅ unicorn/no-object-as-default-parameter
    // Disallow the use of an object literal as a default value for a parameter.
    // You should instead destructure and specify default values per field.
    "unicorn/no-object-as-default-parameter": "error",

    // ❌ unicorn/no-static-only-class
    // Disallow class declarations that exclusively contain static members.
    // Superseded by typescript/no-extraneous-class.

    // ❌ unicorn/no-this-assignment
    // Disallow assigning this to a variable.
    // Not useful enough.

    // ✅ unicorn/no-typeof-undefined
    // Disallow typeof comparisons with undefined.
    // Better to compare against undefined directly.
    "unicorn/no-typeof-undefined": "error",

    // ❌ unicorn/no-unnecessary-array-flat-depth
    // Disallows passing 1 to Array.prototype.flat.
    // Not useful enough.

    // ❌ unicorn/no-unnecessary-array-splice-count
    // Disallows passing `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#splice()` or
    // `Array#toSpliced()`.
    // Not useful enough.

    // ❌ unicorn/no-unnecessary-slice-end
    // Disallows unnecessarily passing a second argument to slice(...), for cases where it would not change the result.
    // Not useful enough.

    // ❌ unicorn/no-unreadable-iife
    // This rule disallows IIFEs with a parenthesized arrow function body.
    // Not useful enough.

    // ✅ unicorn/no-useless-promise-resolve-reject
    // Disallows returning values wrapped in `Promise.resolve` or `Promise.reject` in an async function or a
    // `Promise#then`/`catch`/`finally` callback.
    // More readable.
    "unicorn/no-useless-promise-resolve-reject": "error",

    // ❌ unicorn/no-useless-switch-case
    // Disallows useless default cases in switch statements.
    // Not useful enough.

    // ❌ unicorn/no-useless-undefined
    // Prevents usage of undefined in cases where it would be useless.
    // Not useful enough.

    // ✅ unicorn/prefer-array-flat
    // Prefers Array#flat() over legacy techniques to flatten arrays.
    // More readable.
    "unicorn/prefer-array-flat": "error",

    // ✅ unicorn/prefer-array-some
    // Prefers using `Array#some()` over `Array#find()`, `Array#findLast()` with comparing to `undefined`, or
    // `Array#findIndex()`, `Array#findLastIndex()` and a non-zero length check on the result of `Array#filter()`.
    // More readable.
    "unicorn/prefer-array-some": "error",

    // ❌ unicorn/prefer-at
    // Prefer the `Array#at()` and `String#at()` methods for index access.
    // Not useful enough.

    // ✅ unicorn/prefer-blob-reading-methods
    // Recommends using Blob#text() and Blob#arrayBuffer() over FileReader#readAsText() and
    // FileReader#readAsArrayBuffer().
    // More readable.
    "unicorn/prefer-blob-reading-methods": "error",

    // ❌ unicorn/prefer-code-point
    // Prefer usage of String#codePointAt over String#charCodeAt. Prefer usage of String.fromCodePoint over
    // String.fromCharCode.
    // Not useful enough.

    // ✅ unicorn/prefer-date-now
    // Prefers use of Date.now() over new Date().getTime() or new Date().valueOf().
    // More readable.
    "unicorn/prefer-date-now": "error",

    // ✅ unicorn/prefer-dom-node-append
    // Enforces the use of, for example, document.body.append(div); over document.body.appendChild(div); for DOM nodes.
    // Best practice.
    "unicorn/prefer-dom-node-append": "error",

    // ✅ unicorn/prefer-dom-node-dataset
    // Use .dataset on DOM elements over getAttribute(…), .setAttribute(…), .removeAttribute(…) and .hasAttribute(…).
    // Best practice.
    "unicorn/prefer-dom-node-dataset": "error",

    // ✅ unicorn/prefer-dom-node-remove
    // Prefers the use of child.remove() over parentNode.removeChild(child).
    // Best practice.
    "unicorn/prefer-dom-node-remove": "error",

    // ✅ unicorn/prefer-event-target
    // Prefers EventTarget over EventEmitter.
    // Best practice.
    "unicorn/prefer-event-target": "error",

    // ✅ unicorn/prefer-import-meta-properties
    // Prefer import.meta.{dirname,filename} over legacy techniques for getting file paths.
    // Best practice.
    "unicorn/prefer-import-meta-properties": "error",

    // ✅ unicorn/prefer-math-min-max
    // Prefers use of Math.min() and Math.max() instead of ternary expressions when performing simple comparisons.
    // Best practice.
    "unicorn/prefer-math-min-max": "error",

    // ✅ unicorn/prefer-math-trunc
    // Prefers use of Math.trunc() instead of bitwise operations for clarity and more reliable results.
    // Best practice.
    "unicorn/prefer-math-trunc": "error",

    // ❌ unicorn/prefer-native-coercion-functions
    // Prefers built-in functions over custom ones with the same functionality.
    // Superseded by TODO.

    // ❌ unicorn/prefer-number-coercion
    // Prefer Number() over parseFloat() and base-10 parseInt().
    // Too limiting.

    // ✅ unicorn/prefer-prototype-methods
    // This rule prefers borrowing methods from the prototype instead of the instance.
    // Best practice.
    "unicorn/prefer-prototype-methods": "error",

    // ✅ unicorn/prefer-query-selector
    // Prefer .querySelector() over .getElementById(). And prefer .querySelectorAll() over .getElementsByClassName(),
    // .getElementsByTagName(), and .getElementsByName().
    // Best practice.
    "unicorn/prefer-query-selector": "error",

    // ✅ unicorn/prefer-regexp-test
    // Prefers RegExp#test() over String#match() and String#exec().
    // Best practice.
    "unicorn/prefer-regexp-test": "error",

    // ✅ unicorn/prefer-single-call
    // Enforces combining multiple Array#{push,unshift}(), Element#classList.{add,remove}(), and importScripts() into a
    // single call.
    // More readable.
    "unicorn/prefer-single-call": "error",

    // ✅ unicorn/prefer-string-replace-all
    // Prefers String#replaceAll() over String#replace() when using a regex with the global flag.
    // More readable.
    "unicorn/prefer-string-replace-all": "error",

    // ✅ unicorn/prefer-string-slice
    // Prefer String#slice() over String#substr() and String#substring().
    // Best practice.
    "unicorn/prefer-string-slice": "error",

    // ✅ unicorn/prefer-top-level-await
    // Prefer top-level await over top-level promises and async function calls.
    // Best practice.
    "unicorn/prefer-top-level-await": "error",

    // ✅ unicorn/prefer-type-error
    // Enforce throwing a TypeError instead of a generic Error after a type checking if-statement.
    // Best practice.
    "unicorn/prefer-type-error": "error",

    // ❌ unicorn/require-number-to-fixed-digits-argument
    // Enforce using the digits argument with Number#toFixed().
    // Not useful enough.
  },
} satisfies OxlintConfig;
