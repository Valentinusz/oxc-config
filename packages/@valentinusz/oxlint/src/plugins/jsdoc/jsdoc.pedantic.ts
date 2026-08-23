import type { OxlintConfig } from 'oxlint';

export const jsdocPedantic = {
  rules: {
    // ✅ jsdoc/require-param
    // Requires that all function parameters are documented with JSDoc @param tags.
    'jsdoc/require-param': 'error',

    // ✅ jsdoc/require-param-description
    // Requires that each @param tag has a description value.
    'jsdoc/require-param-description': 'error',

    // ✅ jsdoc/require-param-name
    // Requires that all @param tags have names.
    'jsdoc/require-param-name': 'error',

    // ✅ jsdoc/require-param-type
    // Requires that each @param tag has a type value (within curly brackets).
    'jsdoc/require-param-type': 'error',

    // ✅ jsdoc/require-returns
    // Requires that return statements are documented and reports duplicate @returns tags.
    'jsdoc/require-returns': 'error',

    // ✅ jsdoc/require-returns-description
    // Requires that the @returns tag has a description value.
    'jsdoc/require-returns-description': 'error',

    // ✅ jsdoc/require-returns-type
    // Requires that the @returns tag has a type value (in curly brackets).
    'jsdoc/require-returns-type': 'error',

    // ✅ jsdoc/require-throws-type
    // Requires a type on the @throws tag.
    'jsdoc/require-throws-type': 'error',

    // ✅ jsdoc/require-yields-type
    // Requires a type on the @yields tag.
    'jsdoc/require-yields-type': 'error',
  },
} satisfies OxlintConfig;
