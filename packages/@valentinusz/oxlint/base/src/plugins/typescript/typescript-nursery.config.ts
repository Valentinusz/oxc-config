import type { OxlintConfig } from "oxlint";

export const typescriptNurseryConfig = {
  rules: {
    // ✅ typescript/no-unnecessary-condition
    // 💭 Type aware.
    // Disallow conditions that are always truthy, always falsy, or always nullish based on TypeScript's type
    // information.
    // Useful to prevent dead code.
    "typescript/no-unnecessary-condition": "error",

    // ✅ typescript/prefer-optional-chain
    // 💭 Type aware.
    // Enforce using concise optional chain expressions instead of chained logical AND operators, negated logical OR
    // operators, or empty objects.
    // Optional chaining makes code easier to read.
    "typescript/prefer-optional-chain": "error",
  },
} satisfies OxlintConfig;
