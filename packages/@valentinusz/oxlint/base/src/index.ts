import { defineConfig } from "oxlint";
import { eslintConfig } from "./eslint.ts";
import { importConfig } from "./import.ts";
import { jsdocConfig } from "./jsdoc.ts";
import { oxcConfig } from "./oxc.ts";
import { promiseConfig } from "./promise.ts";
import { typescriptConfig } from "./typescript.ts";
import { unicornConfig } from "./unicorn.ts";
import { vitestConfig } from "./vitest.ts";

export const oxlintConfig = defineConfig({
  extends: [
    eslintConfig,
    importConfig,
    jsdocConfig,
    oxcConfig,
    promiseConfig,
    typescriptConfig,
    unicornConfig,
    vitestConfig,
  ],
  options: {
    reportUnusedDisableDirectives: "error",
    typeAware: true,
  },
  env: {
    browser: true,
  },
});
