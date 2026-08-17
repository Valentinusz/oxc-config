import type { OxlintConfig } from "oxlint";

export const importPedanticConfig = {
  rules: {
    // ❌ import/max-dependencies
    // Forbid modules to have too many dependencies (`import` statements only).
    // Useful but too limiting.
  },
} satisfies OxlintConfig;
