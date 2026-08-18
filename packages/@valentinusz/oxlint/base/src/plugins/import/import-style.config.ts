import { CONFIG_FILES } from '@/constants.ts';

import type { OxlintConfig } from 'oxlint';

export const importStyleConfig = {
  rules: {
    // ✅ import/consistent-type-specifier-style
    // Enforces or bans the use of inline type-only markers for named imports.
    // Makes code easier to read.
    'import/consistent-type-specifier-style': 'error',

    // ❌ import/exports-last
    // Enforces that all exports are declared at the bottom of the file.
    // Too limiting.

    // ✅ import/first
    // Forbids any non-import statements before imports except directives.
    // Convention.
    'import/first': 'error',

    // ❌ import/group-exports
    // Reports when named exports are not grouped together in a single export declaration.
    // Too limiting.

    // ✅ import/newline-after-import
    // Enforces one or more empty lines after the last top-level import statement or require call.
    // Readability.
    'import/newline-after-import': 'error',

    // ❌ import/no-anonymous-default-export
    // Reports if a module's default export is unnamed.
    // Superseded by `import/no-default-export`.

    // ❌ import/no-duplicates
    // Reports if a resolved path is imported more than once in the same module.
    // Superseded by TypeScript (TS2300).

    // ✅ import/no-mutable-exports
    // Forbids the use of mutable exports with var or let.
    // We should only export constants.
    'import/no-mutable-exports': 'error',

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
    // Browser code has no access to these. Select files ran in a node context are made exempt from this rule. Check
    // `overrides` for this list.
    'import/no-nodejs-modules': 'error',

    // ❌ import/prefer-default-export
    // Checks whether there is a default export.
    // Too limiting.
  },
  overrides: [
    {
      files: [...CONFIG_FILES],
      rules: {
        'import/no-nodejs-modules': 'off',
      },
    },
  ],
} satisfies OxlintConfig;
