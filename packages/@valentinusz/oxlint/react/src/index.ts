import { defineConfig } from 'oxlint';

import { jsxA11yPlugin } from './plugins/jsx-a11y/jsx-a11y.plugin.ts';
import { reactPerfPlugin } from './plugins/react-perf/react-perf.plugin.ts';
import { reactPlugin } from './plugins/react/react.plugin.ts';

export const oxlintConfigReact = defineConfig({
  extends: [jsxA11yPlugin, reactPlugin, reactPerfPlugin],
});
