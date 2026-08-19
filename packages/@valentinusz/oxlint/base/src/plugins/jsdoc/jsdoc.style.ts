import type { OxlintConfig } from 'oxlint';

export const jsdocStyle = {
  rules: {
    // ✅ jsdoc/no-blank-blocks
    // Reports and optionally removes JSDoc blocks that contain only whitespace.
    // Useful cleanup.
    'jsdoc/no-blank-blocks': 'error',

    // ✅ jsdoc/require-throws-description
    // Requires a description for @throws tags.
    // Honestly is a correctness rule.
    'jsdoc/require-throws-description': 'error',

    // ✅ jsdoc/require-yields-description
    // Requires a description for @yields tags.
    // Honestly is a correctness rule.
    'jsdoc/require-yields-description': 'error',
  },
} satisfies OxlintConfig;
