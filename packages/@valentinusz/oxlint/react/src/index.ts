import { defineConfig } from 'oxlint';

import { jsxA11yPlugin } from './plugins/jsx-a11y/jsx-a11y.plugin.ts';
import { reactPerfPlugin } from './plugins/react-perf/react-perf.plugin.ts';
import { reactConfig } from './plugins/react/react.config.ts';

export const oxlintConfigReact = defineConfig({
  extends: [jsxA11yPlugin, reactConfig, reactPerfPlugin],
});
