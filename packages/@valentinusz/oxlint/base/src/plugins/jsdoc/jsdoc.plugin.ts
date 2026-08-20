import { jsdocCorrectness } from './jsdoc.correctness.ts';
import { jsdocPedantic } from './jsdoc.pedantic.ts';
import { jsdocRestriction } from './jsdoc.restriction.ts';
import { jsdocStyle } from './jsdoc.style.ts';

import type { OxlintConfig } from 'oxlint';

export const jsdocPlugin = {
  // ℹ️ All jsdoc rules enforce correct use.
  plugins: ['jsdoc'],
  extends: [jsdocCorrectness, jsdocPedantic, jsdocRestriction, jsdocStyle],
} satisfies OxlintConfig;
