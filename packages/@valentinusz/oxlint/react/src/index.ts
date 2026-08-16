import { defineConfig } from "oxlint";
import { jsxA11yConfig } from "./jsx-a11y.ts";
import { reactConfig } from "./react.ts";
import { reactPerfConfig } from "./react-perf.ts";

export const oxlintConfigReact = defineConfig({
  extends: [jsxA11yConfig, reactConfig, reactPerfConfig],
});
