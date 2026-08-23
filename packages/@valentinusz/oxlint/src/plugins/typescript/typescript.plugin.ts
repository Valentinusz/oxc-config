import type { OxlintConfig } from 'oxlint';
import { typescriptNursery } from './typescript.nursery.ts';
import { typescriptPedantic } from './typescript.pedantic.ts';
import { typescriptRestriction } from './typescript.restriction.ts';
import { typescriptStyle } from './typescript.style.ts';
import { typescriptSuspicious } from './typescript.suspicious.ts';

export const typescriptPlugin = {
  plugins: ['typescript'],
  extends: [
    // ℹ️ All typescript correctness rules are enabled by default, so no separate config is created for it.
    typescriptNursery,
    typescriptPedantic,
    typescriptRestriction,
    typescriptStyle,
    typescriptSuspicious,
  ],
} satisfies OxlintConfig;
