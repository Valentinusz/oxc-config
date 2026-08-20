import type { OxlintConfig } from 'oxlint';

export const jsdocRestriction = {
  rules: {
    // ✅ jsdoc/check-access
    // Checks that @access tags use one of the supported visibility values.
    'jsdoc/check-access': 'error',

    // ✅ jsdoc/empty-tags
    // Expects tags like @abstract, @async, @generator, @global, and @ignore to be empty.
    'jsdoc/empty-tags': 'error',
  },
} satisfies OxlintConfig;
