import { defineConfig } from "oxlint";
import { jsxA11yConfig } from "./plugins/jsx-a11y.config.ts";
import { reactConfig } from "./plugins/react/react.config.ts";
import { reactPerfConfig } from "./plugins/react-perf.config.ts";

export const oxlintConfigReact = defineConfig({
  extends: [jsxA11yConfig, reactConfig, reactPerfConfig],
});
