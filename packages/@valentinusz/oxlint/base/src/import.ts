import type { OxlintConfig } from "oxlint";

export const importConfig = {
  plugins: ["import"],
  rules: {
    // -----------------
    // Correctness rules
    // -----------------

    // ❌ import/default
    // If a default import is requested, this rule will report if there is no default export in the imported module.
    // Superseded by TypeScript (TS2613).
    "import/default": "off",

    // ❌ import/namespace
    // Enforces names exist at the time they are dereferenced when imported as a full namespace.
    // Superseded by TypeScript (TS2551).
    "import/namespace": "off",

    // -------------
    // Nursery rules
    // -------------

    // ❌ import/export
    // Reports suspicious export patterns such as repeated exports of names or defaults.
    // Only useful in library code, since barrel files are discouraged. Multiple exports are checked by TS2300.

    // ❌ import/named
    // Verifies that all named imports correspond to actual named exports in the target module.
    // Superseded by TypeScript (TS2305).

    // --------------
    // Pedantic rules
    // --------------

    // ❌ import/max-dependencies
    // Forbid modules to have too many dependencies (`import` statements only).
    // Useful but too limiting.

    // -----------------
    // Restriction rules
    // -----------------

    // ✅ import/extensions
    // Some file resolve algorithms allow you to omit the file extension within the import source path.
    // Specifying extensions improves bundler performance.
    // Extensions are not required for packages.
    "import/extensions": [
      "error",
      {
        ignorePackages: true,
      },
    ],

    // ❌ import/no-amd
    // Forbids the use of AMD `require` and `define` calls.
    // Not useful enough.

    // ❌ import/no-commonjs
    // Forbids CommonJS `require` calls, `module.exports`, and `exports.*`.
    // Not useful enough.

    // ❌ import/no-cycle
    // Disallows cyclic dependencies.
    // Too costly to check.

    // ✅ import/no-default-export
    // Disallows modules from having default exports.
    // No default export makes refactoring and auto-imports easier.
    // Some common config files that make use of default exports are allowed (see overrides below).
    "import/no-default-export": "error",

    // ❌ import/no-dynamic-require
    // Forbids imports that use an expression for the module argument.
    // Not useful enough.

    // ✅ import/no-relative-parent-imports
    // Forbids importing modules from parent directories using relative paths.
    // This restriction enforces tree-like folder structures instead of complex graph-like structures, making large
    // codebases easier to maintain.
    "import/no-relative-parent-imports": "error",

    // ❌ import/no-webpack-loader-syntax
    // Forbids using Webpack loader syntax directly in import or require statements.
    // Not useful enough.
    "import/no-webpack-loader-syntax": "error",

    // ❌ import/unambiguous
    // Warns if a module could be mistaken for a script instead of an ES module.
    // Not useful enough.

    // -----------
    // Style rules
    // -----------

    // ✅ import/consistent-type-specifier-style
    // Enforces or bans the use of inline type-only markers for named imports.
    // Makes code easier to read.
    "import/consistent-type-specifier-style": "error",

    // ❌ import/exports-last
    // Enforces that all exports are declared at the bottom of the file.
    // Too limiting.

    // ✅ import/first
    // Forbids any non-import statements before imports except directives.
    // Convention.
    "import/first": "error",

    // ❌ import/group-exports
    // Reports when named exports are not grouped together in a single export declaration.
    // Too limiting.

    // ✅ import/newline-after-import
    // Enforces one or more empty lines after the last top-level import statement or require call.
    // Readability.
    "import/newline-after-import": "error",

    // ❌ import/no-anonymous-default-export
    // Reports if a module's default export is unnamed.
    // Superseded by `import/no-default-export`.

    // ❌ import/no-duplicates
    // Reports if a resolved path is imported more than once in the same module.
    // Superseded by TypeScript (TS2300).

    // ✅ import/no-mutable-exports
    // Forbids the use of mutable exports with var or let.
    // We should only export constants.
    "import/no-mutable-exports": "error",

    // ❌ import/no-named-default
    // Reports use of a default export as a locally named import.
    // Not useful enough.

    // ❌ import/no-named-export
    // Prohibits named exports.
    // Named exports are preferred.

    // ❌ import/no-namespace
    // Enforces a convention of not using namespaced wildcard imports.
    // Too limiting.

    // ✅ import/no-nodejs-modules
    // Forbid the use of Node.js builtin modules.
    // Browser code has no access to these.
    "import/no-nodejs-modules": "error",

    // ❌ import/prefer-default-export
    // Checks whether there is a default export.
    // Too limiting.

    // ----------------
    // Suspicious rules
    // ----------------

    // ✅ import/no-absolute-path
    // Forbids the import of modules using absolute paths.
    // Bad practice as it ties the code using it to your computer.
    "import/no-absolute-path": "error",

    // ✅ import/no-empty-named-blocks
    // Enforce that named import blocks are not empty.
    // Empty named imports serve no practical purpose.
    "import/no-empty-named-blocks": "error",

    // ❌ import/no-named-as-default
    // Reports use of an exported name as the locally imported name of a default export.
    // Default export is disabled.

    // ✅ import/no-named-as-default-member
    // Reports use of an exported name as a property on the default export.
    // Accessing a named export via the default export is incorrect and will not work as expected.
    "import/no-named-as-default-member": "error",

    // ❌ import/no-self-import
    // Forbids a module from importing itself.
    // Not useful enough.

    // ❌ import/no-unassigned-import
    // Reports modules imported for side effects but not assigned.
    // Not useful enough.
  },
  overrides: [
    {
      files: ["vite.config.{js,mjs,cjs,ts,mts,cts}"],
      rules: {
        "import/no-default-export": "allow",
      },
    },
  ],
} satisfies OxlintConfig;
