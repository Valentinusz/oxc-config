import type { OxlintConfig } from "oxlint";

export const eslintNurseryConfig = {
  rules: {
    /**
     * ❌ eslint/no-restricted-exports
     *
     * Disallows specified names from being used as exported names.
     *
     * 📁 Useful, but has to be managed per-project.
     */
    /**
     * ❌ eslint/no-undef
     *
     * Disallow the use of undeclared variables.
     *
     * ➡️ Handled by TypeScript.
     */
    /**
     * ❌ eslint/no-unreachable-loop
     *
     * Disallow loops whose body allows only one iteration.
     *
     * Not useful enough.
     */
    /**
     * ❌ eslint/no-useless-assignment
     *
     * Flags assignments where the newly assigned value is never read afterward (a "dead store"). This helps catch
     * wasted work or accidental mistakes.
     *
     * Not useful enough.
     */
  },
} satisfies OxlintConfig;
