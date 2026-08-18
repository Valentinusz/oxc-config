import type { OxlintConfig } from 'oxlint';

export const importPedanticConfig = {
  rules: {
    // ❌ import/max-dependencies
    // Forbid modules to have too many dependencies (`import` statements only).
    // 🔒 Too limiting.
  },
} satisfies OxlintConfig;
