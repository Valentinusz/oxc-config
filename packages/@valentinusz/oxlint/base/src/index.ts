import { defineConfig } from 'oxlint';

import { eslintPlugin } from './plugins/eslint/eslint.plugin.ts';
import { importConfig } from './plugins/import/import.config.ts';
import { jsdocPlugin } from './plugins/jsdoc/jsdoc.plugin.ts';
import { promisePlugin } from './plugins/promise/promise.plugin.ts';
import { typescriptPlugin } from './plugins/typescript/typescript.plugin.ts';
import { unicornPlugin } from './plugins/unicorn/unicorn.plugin.ts';

export const oxlintConfig = defineConfig({
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
});
