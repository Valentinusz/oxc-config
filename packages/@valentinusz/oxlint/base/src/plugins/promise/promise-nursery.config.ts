import type { OxlintConfig } from "oxlint";

export const promiseNurseryConfig = {
  rules: {
    // ❌ promise/no-return-in-finally
    // Disallow return statements in a finally() callback of a promise.
    // Not useful enough.
  },
} satisfies OxlintConfig;
