import type { OxlintConfig } from "oxlint";
import { jsdocCorrectnessConfig } from "./jsdoc-correctness.config.ts";
import { jsdocPedanticConfig } from "./jsdoc-pedantic.config.ts";
import { jsdocRestrictionConfig } from "./jsdoc-restriction.config.ts";
import { jsdocStyleConfig } from "./jsdoc-style.config.ts";

export const jsdocConfig = {
  plugins: ["jsdoc"],
  extends: [jsdocCorrectnessConfig, jsdocPedanticConfig, jsdocRestrictionConfig, jsdocStyleConfig],
} satisfies OxlintConfig;
