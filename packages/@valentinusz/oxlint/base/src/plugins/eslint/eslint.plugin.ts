import { eslintNursery } from './eslint.nursery.ts';
import { eslintPedantic } from './eslint.pedantic.ts';
import { eslintPerf } from './eslint.perf.ts';
import { eslintRestriction } from './eslint.restriction.ts';
import { eslintStyle } from './eslint.style.ts';
import { eslintSuspicious } from './eslint.suspicious.ts';

import type { OxlintConfig } from 'oxlint';

export const eslintPlugin = {
  plugins: ['eslint'],
  extends: [
    // ℹ️ All eslint correctness rules are enabled by default, so no separate config is created for it.
    eslintNursery,
    eslintPedantic,
    eslintPerf,
    eslintRestriction,
    eslintStyle,
    eslintSuspicious,
  ],
} satisfies OxlintConfig;
