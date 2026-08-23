import { defineConfig } from 'oxlint';

import { oxlintConfig } from './packages/@valentinusz/oxlint/base/src/index.ts';

export default defineConfig({
  extends: [oxlintConfig],
});
