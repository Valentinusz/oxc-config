import type { OxlintConfig } from 'oxlint';
import { CONFIG_FILES } from '#lib/constants.ts';

export const importRestrictionConfig = {
  rules: {
    // ✅ import/extensions
    // Some file resolve algorithms allow you to omit the file extension within the import source path.
    // ⚡Performance. Specifying extensions improves bundler performance.
    // Extensions are not required when importing from packages.
    'import/extensions': [
      'error',
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
    // Useful, but too costly to check.

    // ✅ import/no-default-export
    // Disallows modules from having default exports.
    // 🏆 Best practice. No default export makes refactoring and auto-imports easier.
    // Some common config files that make use of default exports are allowed (see overrides below).
    'import/no-default-export': 'error',

    // ❌ import/no-dynamic-require
    // Forbids imports that use an expression for the module argument.
    // Not useful enough.

    // ✅ import/no-relative-parent-imports
    // Forbids importing modules from parent directories using relative paths.
    // 🏆 Best practice. This restriction enforces tree-like folder structures instead of complex graph-like structures,
    // making large codebases easier to maintain.
    'import/no-relative-parent-imports': 'error',

    // ❌ import/no-webpack-loader-syntax
    // Forbids using Webpack loader syntax directly in import or require statements.
    // Not useful enough.

    // ❌ import/unambiguous
    // Warns if a module could be mistaken for a script instead of an ES module.
    // Not useful enough.
  },
  overrides: [
    {
      files: [...CONFIG_FILES],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
} satisfies OxlintConfig;
