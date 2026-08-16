import type { OxlintConfig } from "oxlint";

export const unicornConfig = {
  plugins: ["unicorn"],
  rules: {
    // -----------------
    // Correctness rules
    // -----------------

    // ✅ unicorn/no-await-in-promise-methods
    // Disallow using await in Promise method parameters.
    "unicorn/no-await-in-promise-methods": "error",

    // ✅ unicorn/no-empty-file
    // Disallows files that do not contain any meaningful code.
    "unicorn/no-empty-file": "error",

    // ✅ unicorn/no-invalid-fetch-options
    // Disallow invalid options in fetch() and new Request(). Specifically, this rule ensures that a body is not provided when the method is GET or HEAD, as it will result in a TypeError.
    "unicorn/no-invalid-fetch-options": "error",

    // ✅ unicorn/no-invalid-remove-event-listener
    // It warns when you use a non-function value as the second argument of removeEventListener.
    "unicorn/no-invalid-remove-event-listener": "error",

    // ✅ unicorn/no-new-array
    // Disallow new Array().
    "unicorn/no-new-array": "error",

    // ✅ unicorn/no-single-promise-in-promise-methods
    // Disallow passing single-element arrays to Promise methods.
    "unicorn/no-single-promise-in-promise-methods": "error",

    // ✅ unicorn/no-thenable
    // Disallow defining a then property.
    "unicorn/no-thenable": "error",

    // ✅ unicorn/no-unnecessary-await
    // Disallow awaiting on non-promise values.
    "unicorn/no-unnecessary-await": "error",

    // ✅ unicorn/no-useless-fallback-in-spread
    // Disallow useless fallback when spreading in object literals.
    "unicorn/no-useless-fallback-in-spread": "error",

    // ✅ unicorn/no-useless-length-check
    // It checks for an unnecessary array length check in a logical expression.
    "unicorn/no-useless-length-check": "error",

    // ✅ unicorn/no-useless-spread
    // Disallows using spread syntax in following, unnecessary cases:
    "unicorn/no-useless-spread": "error",

    // ✅ unicorn/prefer-set-size
    // Prefer Set#size over Set#length when the Set is converted to an array.
    "unicorn/prefer-set-size": "error",

    // ✅ unicorn/prefer-string-starts-ends-with
    // Prefer String#startsWith() and String#endsWith() over using a regex with /^foo/ or /foo$/.
    "unicorn/prefer-string-starts-ends-with": "error",
    // -----------------
    // Pedantic rules
    // -----------------

    // ✅ unicorn/consistent-assert
    // Enforces consistent usage of the assert module.
    "unicorn/consistent-assert": "error",

    // ✅ unicorn/consistent-empty-array-spread
    // When spreading a ternary in an array, we can use both [] and &#39;&#39; as fallbacks, but it&#39;s better to have consistent types in both branches.
    "unicorn/consistent-empty-array-spread": "error",

    // ✅ unicorn/escape-case
    // Enforces defining escape sequence values with uppercase characters rather than lowercase ones. This promotes readability by making the escaped value more distinguishable from the identifier.
    "unicorn/escape-case": "error",

    // ✅ unicorn/explicit-length-check
    // Enforce explicitly comparing the length or size property of a value.
    "unicorn/explicit-length-check": "error",

    // ✅ unicorn/new-for-builtins
    // Enforces the use of new for the following builtins: Object, Array, ArrayBuffer, BigInt64Array, BigUint64Array, DataView, Date, Error, Float16Array, Float32Array, Float64Array, Function, Int8Array, Int16Array, Int32Array, Map, WeakMap, Set, WeakSet, Promise, RegExp, Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, SharedArrayBuffer, Proxy, WeakRef, FinalizationRegistry.
    "unicorn/new-for-builtins": "error",

    // ✅ unicorn/no-array-callback-reference
    // Prevents passing a function reference directly to iterator methods.
    "unicorn/no-array-callback-reference": "error",

    // ✅ unicorn/no-hex-escape
    // Enforces a convention of using Unicode escapes instead of hexadecimal escapes for consistency and clarity.
    "unicorn/no-hex-escape": "error",

    // ✅ unicorn/no-immediate-mutation
    // Disallows mutating a variable immediately after initialization.
    "unicorn/no-immediate-mutation": "error",

    // ✅ unicorn/no-instanceof-array
    // Require Array.isArray() instead of instanceof Array.
    "unicorn/no-instanceof-array": "error",

    // ✅ unicorn/no-lonely-if
    // Disallow if statements as the only statement in if blocks without else.
    "unicorn/no-lonely-if": "error",

    // ✅ unicorn/no-negated-condition
    // Disallow negated conditions.
    "unicorn/no-negated-condition": "error",

    // ✅ unicorn/no-negation-in-equality-check
    // Disallow negated expressions on the left of (in)equality checks.
    "unicorn/no-negation-in-equality-check": "error",

    // ✅ unicorn/no-new-buffer
    // Disallows the deprecated new Buffer() constructor.
    "unicorn/no-new-buffer": "error",

    // ✅ unicorn/no-object-as-default-parameter
    // Disallow the use of an object literal as a default value for a parameter.
    "unicorn/no-object-as-default-parameter": "error",

    // ✅ unicorn/no-static-only-class
    // Disallow class declarations that exclusively contain static members.
    "unicorn/no-static-only-class": "error",

    // ✅ unicorn/no-this-assignment
    // Disallow assigning this to a variable.
    "unicorn/no-this-assignment": "error",

    // ✅ unicorn/no-typeof-undefined
    // Disallow typeof comparisons with undefined.
    "unicorn/no-typeof-undefined": "error",

    // ✅ unicorn/no-unnecessary-array-flat-depth
    // Disallows passing 1 to Array.prototype.flat.
    "unicorn/no-unnecessary-array-flat-depth": "error",

    // ✅ unicorn/no-unnecessary-array-splice-count
    // Disallows passing .length or Infinity as the deleteCount or skipCount argument of Array#splice() or Array#toSpliced().
    "unicorn/no-unnecessary-array-splice-count": "error",

    // ✅ unicorn/no-unnecessary-slice-end
    // Disallows unnecessarily passing a second argument to slice(...), for cases where it would not change the result.
    "unicorn/no-unnecessary-slice-end": "error",

    // ✅ unicorn/no-unreadable-iife
    // This rule disallows IIFEs with a parenthesized arrow function body.
    "unicorn/no-unreadable-iife": "error",

    // ✅ unicorn/no-useless-promise-resolve-reject
    // Disallows returning values wrapped in Promise.resolve or Promise.reject in an async function or a Promise#then/catch/finally callback.
    "unicorn/no-useless-promise-resolve-reject": "error",

    // ✅ unicorn/no-useless-switch-case
    // Disallows useless default cases in switch statements.
    "unicorn/no-useless-switch-case": "error",

    // ✅ unicorn/no-useless-undefined
    // Prevents usage of undefined in cases where it would be useless.
    "unicorn/no-useless-undefined": "error",

    // ✅ unicorn/prefer-array-flat
    // Prefers Array#flat() over legacy techniques to flatten arrays.
    "unicorn/prefer-array-flat": "error",

    // ✅ unicorn/prefer-array-some
    // Prefers using Array#some() over Array#find(), Array#findLast() with comparing to undefined, or Array#findIndex(), Array#findLastIndex() and a non-zero length check on the result of Array#filter()
    "unicorn/prefer-array-some": "error",

    // ✅ unicorn/prefer-at
    // Prefer the Array#at() and String#at() methods for index access.
    "unicorn/prefer-at": "error",

    // ✅ unicorn/prefer-blob-reading-methods
    // Recommends using Blob#text() and Blob#arrayBuffer() over FileReader#readAsText() and FileReader#readAsArrayBuffer().
    "unicorn/prefer-blob-reading-methods": "error",

    // ✅ unicorn/prefer-code-point
    // Prefer usage of String#codePointAt over String#charCodeAt. Prefer usage of String.fromCodePoint over String.fromCharCode.
    "unicorn/prefer-code-point": "error",

    // ✅ unicorn/prefer-date-now
    // Prefers use of Date.now() over new Date().getTime() or new Date().valueOf().
    "unicorn/prefer-date-now": "error",

    // ✅ unicorn/prefer-dom-node-append
    // Enforces the use of, for example, document.body.append(div); over document.body.appendChild(div); for DOM nodes.
    "unicorn/prefer-dom-node-append": "error",

    // ✅ unicorn/prefer-dom-node-dataset
    // Use .dataset on DOM elements over getAttribute(…), .setAttribute(…), .removeAttribute(…) and .hasAttribute(…).
    "unicorn/prefer-dom-node-dataset": "error",

    // ✅ unicorn/prefer-dom-node-remove
    // Prefers the use of child.remove() over parentNode.removeChild(child).
    "unicorn/prefer-dom-node-remove": "error",

    // ✅ unicorn/prefer-event-target
    // Prefers EventTarget over EventEmitter.
    "unicorn/prefer-event-target": "error",

    // ✅ unicorn/prefer-import-meta-properties
    // Prefer import.meta.{dirname,filename} over legacy techniques for getting file paths.
    "unicorn/prefer-import-meta-properties": "error",

    // ✅ unicorn/prefer-math-min-max
    // Prefers use of Math.min() and Math.max() instead of ternary expressions when performing simple comparisons.
    "unicorn/prefer-math-min-max": "error",

    // ✅ unicorn/prefer-math-trunc
    // Prefers use of Math.trunc() instead of bitwise operations for clarity and more reliable results.
    "unicorn/prefer-math-trunc": "error",

    // ✅ unicorn/prefer-native-coercion-functions
    // Prefers built-in functions over custom ones with the same functionality.
    "unicorn/prefer-native-coercion-functions": "error",

    // ✅ unicorn/prefer-number-coercion
    // Prefer Number() over parseFloat() and base-10 parseInt().
    "unicorn/prefer-number-coercion": "error",

    // ✅ unicorn/prefer-prototype-methods
    // This rule prefers borrowing methods from the prototype instead of the instance.
    "unicorn/prefer-prototype-methods": "error",

    // ✅ unicorn/prefer-query-selector
    // Prefer .querySelector() over .getElementById(). And prefer .querySelectorAll() over .getElementsByClassName(), .getElementsByTagName(), and .getElementsByName().
    "unicorn/prefer-query-selector": "error",

    // ✅ unicorn/prefer-regexp-test
    // Prefers RegExp#test() over String#match() and String#exec().
    "unicorn/prefer-regexp-test": "error",

    // ✅ unicorn/prefer-single-call
    // Enforces combining multiple Array#{push,unshift}(), Element#classList.{add,remove}(), and importScripts() into a single call.
    "unicorn/prefer-single-call": "error",

    // ✅ unicorn/prefer-string-replace-all
    // Prefers String#replaceAll() over String#replace() when using a regex with the global flag.
    "unicorn/prefer-string-replace-all": "error",

    // ✅ unicorn/prefer-string-slice
    // Prefer String#slice() over String#substr() and String#substring().
    "unicorn/prefer-string-slice": "error",

    // ✅ unicorn/prefer-top-level-await
    // Prefer top-level await over top-level promises and async function calls.
    "unicorn/prefer-top-level-await": "error",

    // ✅ unicorn/prefer-type-error
    // Enforce throwing a TypeError instead of a generic Error after a type checking if-statement.
    "unicorn/prefer-type-error": "error",

    // ✅ unicorn/require-number-to-fixed-digits-argument
    // Enforce using the digits argument with Number#toFixed().
    "unicorn/require-number-to-fixed-digits-argument": "error",
    // -----------------
    // Perf rules
    // -----------------

    // ✅ unicorn/prefer-array-find
    // Encourages using Array.prototype.find and Array.prototype.findLast instead of taking the first or last matching element from filter(...).
    "unicorn/prefer-array-find": "error",

    // ✅ unicorn/prefer-array-flat-map
    // Prefers the use of .flatMap() when map().flat() are used together.
    "unicorn/prefer-array-flat-map": "error",

    // ✅ unicorn/prefer-set-has
    // Prefer Set#has() over Array#includes() when checking for existence or non-existence.
    "unicorn/prefer-set-has": "error",
    // -----------------
    // Restriction rules
    // -----------------

    // ✅ unicorn/import-style
    // Enforce specific import styles per module.
    "unicorn/import-style": "error",

    // ✅ unicorn/no-abusive-eslint-disable
    // Disallows oxlint-disable or eslint-disable comments without specifying rules.
    "unicorn/no-abusive-eslint-disable": "error",

    // ✅ unicorn/no-anonymous-default-export
    // Disallows anonymous functions and classes as default exports.
    "unicorn/no-anonymous-default-export": "error",

    // ✅ unicorn/no-array-for-each
    // Forbids the use of Array#forEach in favor of a for loop.
    "unicorn/no-array-for-each": "error",

    // ✅ unicorn/no-array-reduce
    // Disallow Array#reduce() and Array#reduceRight().
    "unicorn/no-array-reduce": "error",

    // ✅ unicorn/no-document-cookie
    // Disallows direct use of document.cookie.
    "unicorn/no-document-cookie": "error",

    // ✅ unicorn/no-length-as-slice-end
    // Disallow using length as the end argument of a slice call.
    "unicorn/no-length-as-slice-end": "error",

    // ✅ unicorn/no-magic-array-flat-depth
    // Disallow magic numbers for Array.prototype.flat depth.
    "unicorn/no-magic-array-flat-depth": "error",

    // ✅ unicorn/no-process-exit
    // Disallow all usage of process.exit().
    "unicorn/no-process-exit": "error",

    // ✅ unicorn/no-useless-error-capture-stack-trace
    // Disallows unnecessary Error.captureStackTrace(…) in error constructors.
    "unicorn/no-useless-error-capture-stack-trace": "error",

    // ✅ unicorn/prefer-modern-math-apis
    // Checks for usage of legacy patterns for mathematical operations.
    "unicorn/prefer-modern-math-apis": "error",

    // ✅ unicorn/prefer-module
    // Prefer JavaScript modules (ESM) over CommonJS.
    "unicorn/prefer-module": "error",

    // ✅ unicorn/prefer-node-protocol
    // Prefer using the node: protocol when importing Node.js built-in modules.
    "unicorn/prefer-node-protocol": "error",

    // ✅ unicorn/prefer-number-properties
    // Disallows use of parseInt(), parseFloat(), isNaN(), isFinite(), NaN, Infinity and -Infinity as global variables.
    "unicorn/prefer-number-properties": "error",
    // -----------------
    // Style rules
    // -----------------

    // ✅ unicorn/catch-error-name
    // This rule enforces consistent and descriptive naming for error variables in catch statements, preventing the use of vague names like badName or _ when the error is used.
    "unicorn/catch-error-name": "error",

    // ✅ unicorn/consistent-date-clone
    // The Date constructor can clone a Date object directly when passed as an argument, making timestamp conversion unnecessary. This rule enforces the use of the direct Date cloning instead of using .getTime() for conversion.
    "unicorn/consistent-date-clone": "error",

    // ✅ unicorn/consistent-existence-index-check
    // Enforce consistent style for element existence checks with indexOf(), lastIndexOf(), findIndex(), and findLastIndex(). This ensures that comparisons are performed in a standard and clear way.
    "unicorn/consistent-existence-index-check": "error",

    // ✅ unicorn/consistent-template-literal-escape
    // Enforce consistent style for escaping ${ in template literals.
    "unicorn/consistent-template-literal-escape": "error",

    // ✅ unicorn/custom-error-definition
    // Enforces the only valid way of Error subclassing. It works with any super class that ends in Error.
    "unicorn/custom-error-definition": "error",

    // ✅ unicorn/empty-brace-spaces
    // Removes the extra spaces or new line characters inside a pair of braces that does not contain additional code. This ensures that braces are clean and do not contain unnecessary spaces or newlines.
    "unicorn/empty-brace-spaces": "error",

    // ✅ unicorn/error-message
    // Enforces providing a message when creating built-in Error objects to improve readability and debugging.
    "unicorn/error-message": "error",

    // ✅ unicorn/explicit-timer-delay
    // Enforce or disallow explicit delay argument for setTimeout() and setInterval().
    "unicorn/explicit-timer-delay": "error",

    // ✅ unicorn/filename-case
    // Enforces a consistent case style for filenames to improve project organization and maintainability. By default, kebab-case is enforced, but other styles can be configured.
    "unicorn/filename-case": "error",

    // ✅ unicorn/max-nested-calls
    // Limit the depth of nested calls.
    "unicorn/max-nested-calls": "error",

    // ✅ unicorn/no-array-method-this-argument
    // Disallows the use of the thisArg parameter in array iteration methods such as map, filter, some, every, and similar.
    "unicorn/no-array-method-this-argument": "error",

    // ✅ unicorn/no-await-expression-member
    // Disallows member access from await expressions.
    "unicorn/no-await-expression-member": "error",

    // ✅ unicorn/no-console-spaces
    // Disallows leading/trailing space inside console.log() and similar methods.
    "unicorn/no-console-spaces": "error",

    // ✅ unicorn/no-nested-ternary
    // Disallow deeply nested ternary expressions.
    "unicorn/no-nested-ternary": "error",

    // ✅ unicorn/no-null
    // Disallow the use of the null literal, to encourage using undefined instead.
    "unicorn/no-null": "error",

    // ✅ unicorn/no-unreadable-array-destructuring
    // Disallows destructuring values from an array in ways that are difficult to read.
    "unicorn/no-unreadable-array-destructuring": "error",

    // ✅ unicorn/no-useless-collection-argument
    // Disallow useless values or fallbacks in Set, Map, WeakSet, or WeakMap.
    "unicorn/no-useless-collection-argument": "error",

    // ✅ unicorn/no-zero-fractions
    // Prevents the use of zero fractions.
    "unicorn/no-zero-fractions": "error",

    // ✅ unicorn/number-literal-case
    // This rule enforces proper case for numeric literals.
    "unicorn/number-literal-case": "error",

    // ✅ unicorn/numeric-separators-style
    // Enforces a convention of grouping digits using numeric separators.
    "unicorn/numeric-separators-style": "error",

    // ✅ unicorn/prefer-array-index-of
    // Enforces using indexOf or lastIndexOf instead of findIndex or findLastIndex when the callback is a simple strict equality comparison.
    "unicorn/prefer-array-index-of": "error",

    // ✅ unicorn/prefer-bigint-literals
    // Requires using BigInt literals (e.g. 123n) instead of calling the BigInt() constructor with literal arguments such as numbers or numeric strings
    "unicorn/prefer-bigint-literals": "error",

    // ✅ unicorn/prefer-class-fields
    // Prefers class field declarations over this assignments in constructors for static values.
    "unicorn/prefer-class-fields": "error",

    // ✅ unicorn/prefer-classlist-toggle
    // Prefers the use of element.classList.toggle(className, condition) over conditional add/remove patterns.
    "unicorn/prefer-classlist-toggle": "error",

    // ✅ unicorn/prefer-default-parameters
    // Instead of reassigning a function parameter, default parameters should be used. The foo = foo || 123 statement evaluates to 123 when foo is falsy, possibly leading to confusing behavior, whereas default parameters only apply when passed an undefined value. This rule only reports reassignments to literal values.
    "unicorn/prefer-default-parameters": "error",

    // ✅ unicorn/prefer-dom-node-text-content
    // Enforces the use of .textContent over .innerText for DOM nodes.
    "unicorn/prefer-dom-node-text-content": "error",

    // ✅ unicorn/prefer-export-from
    // When re-exporting from a module, it&#39;s unnecessary to import and then export. It can be done in a single export…from declaration. This rule encourages using direct re-export syntax (export ... from) instead of importing and then exporting. It helps reduce boilerplate code and keeps the module scope clean by avoiding unnecessary local bindings.
    "unicorn/prefer-export-from": "error",

    // ✅ unicorn/prefer-global-this
    // Enforces the use of globalThis instead of environment‑specific global object aliases (window, self, or global).
    "unicorn/prefer-global-this": "error",

    // ✅ unicorn/prefer-includes
    // Prefer includes() over indexOf() when checking for existence/non-existence. All built-ins have .includes() in addition to .indexOf().
    "unicorn/prefer-includes": "error",

    // ✅ unicorn/prefer-keyboard-event-key
    // Enforces the use of KeyboardEvent#key over KeyboardEvent#keyCode, which is deprecated.
    "unicorn/prefer-keyboard-event-key": "error",

    // ✅ unicorn/prefer-logical-operator-over-ternary
    // This rule finds ternary expressions that can be simplified to a logical operator.
    "unicorn/prefer-logical-operator-over-ternary": "error",

    // ✅ unicorn/prefer-modern-dom-apis
    // Enforces the use of:
    "unicorn/prefer-modern-dom-apis": "error",

    // ✅ unicorn/prefer-negative-index
    // Prefer using a negative index over .length - index when possible.
    "unicorn/prefer-negative-index": "error",

    // ✅ unicorn/prefer-object-from-entries
    // Encourages using Object.fromEntries when converting an array of key-value pairs into an object.
    "unicorn/prefer-object-from-entries": "error",

    // ✅ unicorn/prefer-optional-catch-binding
    // Prefers omitting the catch binding parameter if it is unused.
    "unicorn/prefer-optional-catch-binding": "error",

    // ✅ unicorn/prefer-reflect-apply
    // Disallows the use of Function.prototype.apply() and suggests using Reflect.apply() instead.
    "unicorn/prefer-reflect-apply": "error",

    // ✅ unicorn/prefer-response-static-json
    // Enforces the use of Response.json() over new Response(JSON.stringify()).
    "unicorn/prefer-response-static-json": "error",

    // ✅ unicorn/prefer-spread
    // Enforces the use of the spread operator (...) over outdated patterns.
    "unicorn/prefer-spread": "error",

    // ✅ unicorn/prefer-string-raw
    // Prefers use of String.raw to avoid escaping \.
    "unicorn/prefer-string-raw": "error",

    // ✅ unicorn/prefer-string-trim-start-end
    // String#trimLeft() and String#trimRight() are aliases of String#trimStart() and String#trimEnd(). This is to ensure consistency and use direction-independent wording.
    "unicorn/prefer-string-trim-start-end": "error",

    // ✅ unicorn/prefer-structured-clone
    // Prefer using structuredClone to create a deep clone.
    "unicorn/prefer-structured-clone": "error",

    // ✅ unicorn/prefer-ternary
    // Prefers ternary expressions over simple if/else statements.
    "unicorn/prefer-ternary": "error",

    // ✅ unicorn/relative-url-style
    // Enforce consistent relative URL style.
    "unicorn/relative-url-style": "error",

    // ✅ unicorn/require-array-join-separator
    // Enforce using the separator argument with Array#join().
    "unicorn/require-array-join-separator": "error",

    // ✅ unicorn/require-module-attributes
    // This rule enforces a non-empty attribute list in import/export statements and import() expressions.
    "unicorn/require-module-attributes": "error",

    // ✅ unicorn/switch-case-braces
    // Requires empty switch cases to omit braces, while non-empty cases must use braces. This reduces visual clutter for empty cases and enforces proper scoping for non-empty ones.
    "unicorn/switch-case-braces": "error",

    // ✅ unicorn/switch-case-break-position
    // Enforce consistent break/return/continue/throw position in case clauses.
    "unicorn/switch-case-break-position": "error",

    // ✅ unicorn/text-encoding-identifier-case
    // This rule enforces consistent casing for text encoding identifiers, specifically:
    "unicorn/text-encoding-identifier-case": "error",

    // ✅ unicorn/throw-new-error
    // This rule makes sure you always use new when throwing an error.
    "unicorn/throw-new-error": "error",
    // -----------------
    // Suspicious rules
    // -----------------

    // ✅ unicorn/consistent-function-scoping
    // Disallow functions that are declared in a scope which does not capture any variables from the outer scope.
    "unicorn/consistent-function-scoping": "error",

    // ✅ unicorn/no-accessor-recursion
    // Disallow recursive access to this within getters and setters.
    "unicorn/no-accessor-recursion": "error",

    // ✅ unicorn/no-array-fill-with-reference-type
    // Disallows using reference values as Array#fill() values.
    "unicorn/no-array-fill-with-reference-type": "error",

    // ✅ unicorn/no-array-reverse
    // Prefer using Array#toReversed() over Array#reverse().
    "unicorn/no-array-reverse": "error",

    // ✅ unicorn/no-array-sort
    // Prefer using Array#toSorted() over Array#sort().
    "unicorn/no-array-sort": "error",

    // ✅ unicorn/no-confusing-array-with
    // Disallows confusing uses of Array#with().
    "unicorn/no-confusing-array-with": "error",

    // ✅ unicorn/no-instanceof-builtins
    // Disallows the use of instanceof with ECMAScript built-in constructors because:
    "unicorn/no-instanceof-builtins": "error",

    // ✅ unicorn/prefer-add-event-listener
    // Enforces the use of .addEventListener() and .removeEventListener() over their on-function counterparts.
    "unicorn/prefer-add-event-listener": "error",

    // ✅ unicorn/require-module-specifiers
    // Enforce a non-empty specifier list in import and export statements.
    "unicorn/require-module-specifiers": "error",

    // ✅ unicorn/require-post-message-target-origin
    // Enforce using the targetOrigin argument with window.postMessage().
    "unicorn/require-post-message-target-origin": "error",
  },
} satisfies OxlintConfig;
