import type { OxlintConfig } from 'oxlint';
import { jsxA11yPlugin } from '#lib/plugins/jsx-a11y/jsx-a11y.plugin.ts';
import { reactPerfPlugin } from '#lib/plugins/react-perf/react-perf.plugin.ts';
import { reactPlugin } from '#lib/plugins/react/react.plugin.ts';

export const oxlintConfigReact = {
  extends: [jsxA11yPlugin, reactPlugin, reactPerfPlugin],
} satisfies OxlintConfig;
