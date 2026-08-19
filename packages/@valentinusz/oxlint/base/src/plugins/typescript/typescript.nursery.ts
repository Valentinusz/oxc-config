import type { OxlintConfig } from 'oxlint';

export const typescriptNursery = {
  rules: {
    // ✅ typescript/no-unnecessary-condition
    // 💭 Type aware.
    // Disallow conditions that are always truthy, always falsy, or always nullish based on TypeScript's type
    // information.
    // 🏆 Best practice. Useful to prevent dead code.
    'typescript/no-unnecessary-condition': 'error',

    // ✅ typescript/prefer-optional-chain
    // 💭 Type aware.
    // Enforce using concise optional chain expressions instead of chained logical AND operators, negated logical OR
    // operators, or empty objects.
    // 🏆 Best practice. Optional chaining makes code easier to read.
    'typescript/prefer-optional-chain': 'error',
  },
} satisfies OxlintConfig;
