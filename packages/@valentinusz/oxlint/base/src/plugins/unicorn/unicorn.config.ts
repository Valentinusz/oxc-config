import type { OxlintConfig } from "oxlint";
import { unicornCorrectnessConfig } from "./unicorn-correctness.config.ts";
import { unicornPedanticConfig } from "./unicorn-pedantic.config.ts";
import { unicornPerfConfig } from "./unicorn-perf.config.ts";
import { unicornRestrictionConfig } from "./unicorn-restriction.config.ts";
import { unicornStyleConfig } from "./unicorn-style.config.ts";
import { unicornSuspiciousConfig } from "./unicorn-suspicious.config.ts";

export const unicornConfig = {
  plugins: ["unicorn"],
  extends: [
    unicornCorrectnessConfig,
    unicornPedanticConfig,
    unicornPerfConfig,
    unicornRestrictionConfig,
    unicornStyleConfig,
    unicornSuspiciousConfig,
  ],
} satisfies OxlintConfig;
