import type { OxlintConfig } from "oxlint";

export const unicornCorrectnessConfig = {
  rules: {
    // ℹ️ All other correctness rules are enabled by default.

    // ❌ unicorn/prefer-string-starts-ends-with
    // ⚙️ Default. 🗑️ Deprecated.
    // Prefer String#startsWith() and String#endsWith() over using a regex with /^foo/ or /foo$/.
    "unicorn/prefer-string-starts-ends-with": "off",
  },
} satisfies OxlintConfig;
