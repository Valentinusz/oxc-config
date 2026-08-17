import type { OxlintConfig } from 'oxlint';

export const importCorrectnessConfig = {
  rules: {
    // ❌ import/default
    // If a default import is requested, this rule will report if there is no default export in the imported module.
    // Superseded by TypeScript (TS2613).
    'import/default': 'off',

    // ❌ import/namespace
    // Enforces names exist at the time they are dereferenced when imported as a full namespace.
    // Superseded by TypeScript (TS2551).
    'import/namespace': 'off',
  },
} satisfies OxlintConfig;
