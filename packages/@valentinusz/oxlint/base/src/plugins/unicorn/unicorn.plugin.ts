import { unicornCorrectness } from './unicorn.correctness.ts';
import { unicornPedantic } from './unicorn.pedantic.ts';
import { unicornPerf } from './unicorn.perf.ts';
import { unicornRestriction } from './unicorn.restriction.ts';
import { unicornStyle } from './unicorn.style.ts';
import { unicornSuspicious } from './unicorn.suspicious.ts';

import type { OxlintConfig } from 'oxlint';

export const unicornPlugin = {
  plugins: ['unicorn'],
  extends: [
    unicornCorrectness,
    unicornPedantic,
    unicornPerf,
    unicornRestriction,
    unicornStyle,
    unicornSuspicious,
  ],
} satisfies OxlintConfig;
