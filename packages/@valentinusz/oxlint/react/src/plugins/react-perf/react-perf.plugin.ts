import { reactPerfPerf } from './react-perf.perf.ts';

import type { OxlintConfig } from 'oxlint';

export const reactPerfPlugin = {
  plugins: ['react-perf'],
  extends: [reactPerfPerf],
} satisfies OxlintConfig;
