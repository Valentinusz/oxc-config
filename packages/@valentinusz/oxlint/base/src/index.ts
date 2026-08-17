import { defineConfig } from "oxlint";
import { eslintConfig } from "./plugins/eslint/eslint.config.ts";
import { importConfig } from "./plugins/import/import.config.ts";
import { jsdocConfig } from "./plugins/jsdoc/jsdoc.config.ts";
import { promiseConfig } from "./plugins/promise/promise.config.ts";
import { typescriptConfig } from "./plugins/typescript/typescript.config.ts";
import { unicornConfig } from "./plugins/unicorn/unicorn.config.ts";

export const oxlintConfig = defineConfig({
  // all oxc rules are enabled by default, so no separate module is created
  plugins: ["oxc"],
  extends: [
    eslintConfig,
    importConfig,
    jsdocConfig,
    promiseConfig,
    typescriptConfig,
    unicornConfig,
  ],
  options: {
    reportUnusedDisableDirectives: "error",
    typeAware: true,
  },
  env: {
    browser: true,
  },
});
