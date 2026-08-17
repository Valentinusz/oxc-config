import { eslintNurseryConfig } from './eslint-nursery.ts';
import { eslintPedanticConfig } from './eslint-pedantic.ts';
import { eslintPerfConfig } from './eslint-perf.ts';
import { eslintRestrictionConfig } from './eslint-restriction.ts';
import { eslintStyleConfig } from './eslint-style.ts';
import { eslintSuspiciousConfig } from './eslint-suspicious.ts';

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
