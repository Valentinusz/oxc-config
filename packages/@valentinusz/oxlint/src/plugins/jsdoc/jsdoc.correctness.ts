import type { OxlintConfig } from 'oxlint';

export const jsdocCorrectness = {
  rules: {
    // ✅ jsdoc/check-property-names
    // Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined
    // roots.
    'jsdoc/check-property-names': 'error',

    // ✅ jsdoc/check-tag-names
    // Reports invalid block tag names and redundant tag names when a type checker is used.
    'jsdoc/check-tag-names': 'error',

    // ✅ jsdoc/implements-on-classes
    // Reports when a non-constructor function uses @implements.
    'jsdoc/implements-on-classes': 'error',

    // ✅ jsdoc/no-defaults
    // Reports defaults used on @param or @default and optional bracketed params.
    'jsdoc/no-defaults': 'error',

    // ✅ jsdoc/require-property
    // Requires that all @typedef and @namespace tags have @property tags when their type is a plain object.
    'jsdoc/require-property': 'error',

    // ✅ jsdoc/require-property-description
    // Requires that all @property tags have descriptions.
    'jsdoc/require-property-description': 'error',

    // ✅ jsdoc/require-property-name
    // Requires that all @property tags have names.
    'jsdoc/require-property-name': 'error',

    // ✅ jsdoc/require-property-type
    // Requires that each @property tag has a type value (within curly brackets).
    'jsdoc/require-property-type': 'error',

    // ✅ jsdoc/require-yields
    // Requires that yields are documented and reports duplicate @yields tags.
    'jsdoc/require-yields': 'error',
  },
} satisfies OxlintConfig;
