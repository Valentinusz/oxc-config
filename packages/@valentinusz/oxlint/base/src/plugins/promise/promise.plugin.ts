import { promiseCorrectness } from './promise.correctness.ts';
import { promiseNursery } from './promise.nursery.ts';
import { promiseRestriction } from './promise.restriction.ts';
import { promiseStyle } from './promise.style.ts';
import { promiseSuspicious } from './promise.suspicious.ts';

import type { OxlintConfig } from 'oxlint';

export const promisePlugin = {
  plugins: ['promise'],
  extends: [
    promiseCorrectness,
    promiseNursery,
    promiseRestriction,
    promiseStyle,
    promiseSuspicious,
  ],
} satisfies OxlintConfig;
