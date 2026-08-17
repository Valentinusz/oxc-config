import { oxlintConfig } from '@valentinusz/oxlint-config';
import { oxlintConfigReact } from '@valentinusz/oxlint-config-react';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [oxlintConfig, oxlintConfigReact],
});
