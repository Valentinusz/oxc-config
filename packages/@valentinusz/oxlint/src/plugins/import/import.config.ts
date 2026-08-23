import type { OxlintConfig } from 'oxlint';
import { importCorrectnessConfig } from './import-correctness.config.ts';
import { importNurseryConfig } from './import-nursery.config.ts';
import { importPedanticConfig } from './import-pedantic.config.ts';
import { importRestrictionConfig } from './import-restriction.config.ts';
import { importStyleConfig } from './import-style.config.ts';
import { importSuspiciousConfig } from './import-suspicious.config.ts';

export const importConfig = {
  plugins: ['import'],
  extends: [
    importCorrectnessConfig,
    importNurseryConfig,
    importPedanticConfig,
    importRestrictionConfig,
    importStyleConfig,
    importSuspiciousConfig,
  ],
} satisfies OxlintConfig;
