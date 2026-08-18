import { eslintNurseryConfig } from './eslint-nursery.config.ts';
import { eslintPedanticConfig } from './eslint-pedantic.config.ts';
import { eslintPerfConfig } from './eslint-perf.config.ts';
import { eslintRestrictionConfig } from './eslint-restriction.config.ts';
import { eslintStyleConfig } from './eslint-style.config.ts';
import { eslintSuspiciousConfig } from './eslint-suspicious.config.ts';

import type { OxlintConfig } from 'oxlint';

export const eslintConfig = {
  plugins: ['eslint'],
  extends: [
    // ℹ️ All eslint correctness rules are enabled by default, so no separate config is created for it.
    eslintNurseryConfig,
    eslintPedanticConfig,
    eslintPerfConfig,
    eslintRestrictionConfig,
    eslintStyleConfig,
    eslintSuspiciousConfig,
  ],
} satisfies OxlintConfig;
