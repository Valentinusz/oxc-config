import type { OxlintConfig } from 'oxlint';

export const importNurseryConfig = {
  rules: {
    // ❌ import/export
    // Reports suspicious export patterns such as repeated exports of names or defaults.
    // ➡️ Handled by TypeScript (TS2300) and oxc/no-barrel-file.
    // ❌ import/named
    // Verifies that all named imports correspond to actual named exports in the target module.
    // ➡️ Handled by TypeScript (TS2305).
  },
} satisfies OxlintConfig;
