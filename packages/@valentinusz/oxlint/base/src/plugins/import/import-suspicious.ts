import type { OxlintConfig } from "oxlint";

export const importSuspiciousConfig = {
  rules: {
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
} satisfies OxlintConfig;
