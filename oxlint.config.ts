import { defineConfig } from "oxlint";
import { oxlintConfig } from "@valentinusz/oxlint-config";
import { oxlintConfigReact } from "@valentinusz/oxlint-config-react";

export default defineConfig({
  extends: [oxlintConfig, oxlintConfigReact],
});
