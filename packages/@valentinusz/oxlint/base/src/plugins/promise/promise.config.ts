import { promiseCorrectnessConfig } from './promise-correctness.config.ts';
import { promiseNurseryConfig } from './promise-nursery.config.ts';
import { promiseRestrictionConfig } from './promise-restriction.config.ts';
import { promiseStyleConfig } from './promise-style.config.ts';
import { promiseSuspiciousConfig } from './promise-suspicious.config.ts';

import type { OxlintConfig } from 'oxlint';

export const promiseConfig = {
  plugins: ['promise'],
  extends: [
    promiseCorrectnessConfig,
    promiseNurseryConfig,
    promiseRestrictionConfig,
    promiseStyleConfig,
    promiseSuspiciousConfig,
  ],
} satisfies OxlintConfig;
