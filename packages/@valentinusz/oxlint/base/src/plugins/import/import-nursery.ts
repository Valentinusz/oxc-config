import type { OxlintConfig } from 'oxlint';

export const importNurseryConfig = {
  rules: {
    // ❌ import/export
    // Reports suspicious export patterns such as repeated exports of names or defaults.
    // Only useful in library code, since barrel files are discouraged. Multiple exports are checked by TS2300.
    // ❌ import/named
    // Verifies that all named imports correspond to actual named exports in the target module.
    // Superseded by TypeScript (TS2305).
  },
} satisfies OxlintConfig;
