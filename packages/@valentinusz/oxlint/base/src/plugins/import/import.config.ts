import type { OxlintConfig } from "oxlint";
import { importCorrectnessConfig } from "./import-correctness.ts";
import { importNurseryConfig } from "./import-nursery.ts";
import { importPedanticConfig } from "./import-pedantic.ts";
import { importRestrictionConfig } from "./import-restriction.ts";
import { importStyleConfig } from "./import-style.ts";
import { importSuspiciousConfig } from "./import-suspicious.ts";

export const importConfig = {
  plugins: ["import"],
  extends: [
    importCorrectnessConfig,
    importNurseryConfig,
    importPedanticConfig,
    importRestrictionConfig,
    importStyleConfig,
    importSuspiciousConfig,
  ],
} satisfies OxlintConfig;
