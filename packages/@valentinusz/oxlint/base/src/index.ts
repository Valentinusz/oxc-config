import { defineConfig } from "oxlint";
import { eslintConfig } from "./eslint.ts";
import { importConfig } from "./import.ts";
import { jsdocConfig } from "./jsdoc.ts";
import { promiseConfig } from "./promise.ts";
import { typescriptConfig } from "./typescript.ts";
import { unicornConfig } from "./unicorn.ts";

export const oxlintConfig = defineConfig({
  // all oxc rules are enabled by default, so no seperate module
  plugins: ["oxc"],
  extends: [
    eslintConfig,
    importConfig,
    jsdocConfig,
    promiseConfig,
    typescriptConfig,
    unicornConfig,
  ],
  categories: {
    correctness: "error",
  },
  options: {
    reportUnusedDisableDirectives: "error",
    typeAware: true,
  },
  env: {
    browser: true,
  },
});
