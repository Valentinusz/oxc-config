import type { OxlintConfig } from 'oxlint';
import { eslintPlugin } from '#lib/plugins/eslint/eslint.plugin.ts';
import { importConfig } from '#lib/plugins/import/import.config.ts';
import { jsdocPlugin } from '#lib/plugins/jsdoc/jsdoc.plugin.ts';
import { promisePlugin } from '#lib/plugins/promise/promise.plugin.ts';
import { typescriptPlugin } from '#lib/plugins/typescript/typescript.plugin.ts';
import { unicornPlugin } from '#lib/plugins/unicorn/unicorn.plugin.ts';

export const oxlintConfigBase = {
  // all oxc rules are enabled by default, so no separate module is created
  plugins: ['oxc'],
  extends: [
    eslintPlugin,
    importConfig,
    jsdocPlugin,
    promisePlugin,
    typescriptPlugin,
    unicornPlugin,
  ],
  options: {
    reportUnusedDisableDirectives: 'error',
    typeAware: true,
  },
  env: {
    browser: true,
  },
} satisfies OxlintConfig;
