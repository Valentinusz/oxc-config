import { reactCorrectness } from './react.correctness.ts';
import { reactNursery } from './react.nursery.ts';
import { reactPedantic } from './react.pedantic.ts';
import { reactPerf } from './react.perf.ts';
import { reactRestriction } from './react.restriction.ts';
import { reactStyle } from './react.style.ts';
import { reactSuspicious } from './react.suspicious.ts';

import type { OxlintConfig } from 'oxlint';

export const reactPlugin = {
  plugins: ['react'],
  extends: [
    reactCorrectness,
    reactNursery,
    reactPedantic,
    reactPerf,
    reactRestriction,
    reactStyle,
    reactSuspicious,
  ],
} satisfies OxlintConfig;
