import type { OxlintConfig } from "oxlint";
import { reactCorrectnessConfig } from "./react-correctness.config.ts";
import { reactNurseryConfig } from "./react-nursery.config.ts";
import { reactPedanticConfig } from "./react-pedantic.config.ts";
import { reactPerfConfig } from "./react-perf.config.ts";
import { reactRestrictionConfig } from "./react-restriction.config.ts";
import { reactStyleConfig } from "./react-style.config.ts";
import { reactSuspiciousConfig } from "./react-suspicious.config.ts";

export const reactConfig = {
  plugins: ["react"],
  extends: [
    reactCorrectnessConfig,
    reactNurseryConfig,
    reactPedanticConfig,
    reactPerfConfig,
    reactRestrictionConfig,
    reactStyleConfig,
    reactSuspiciousConfig,
  ],
} satisfies OxlintConfig;
