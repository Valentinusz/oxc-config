import type { OxlintConfig } from "oxlint";
import { typescriptNurseryConfig } from "./typescript-nursery.config.ts";
import { typescriptPedanticConfig } from "./typescript-pedantic.config.ts";
import { typescriptRestrictionConfig } from "./typescript-restriction.config.ts";
import { typescriptStyleConfig } from "./typescript-style.config.ts";
import { typescriptSuspiciousConfig } from "./typescript-suspicious.config.ts";

export const typescriptConfig = {
  plugins: ["typescript"],
  extends: [
    // ℹ️ All typescript correctness rules are enabled by default, so no separate config is created for it.
    typescriptNurseryConfig,
    typescriptPedanticConfig,
    typescriptRestrictionConfig,
    typescriptStyleConfig,
    typescriptSuspiciousConfig,
  ],
} satisfies OxlintConfig;
