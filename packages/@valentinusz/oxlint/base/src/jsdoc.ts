import type { OxlintConfig } from "oxlint";

export const jsdocConfig = {
  plugins: ["jsdoc"],
  rules: {
    // -----------------
    // Correctness rules
    // -----------------

    // ✅ jsdoc/check-property-names
    // Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined
    // roots.
    // Correctness rules are enabled by default.

    // ✅ jsdoc/check-tag-names
    // Reports invalid block tag names and redundant tag names when a type checker is used.
    // Correctness rules are enabled by default.

    // ✅ jsdoc/implements-on-classes
    // Reports when a non-constructor function uses @implements.
    // Correctness rules are enabled by default.

    // ✅ jsdoc/no-defaults
    // Reports defaults used on @param or @default and optional bracketed params.
    // Correctness rules are enabled by default.

    // ✅ jsdoc/require-property
    // Requires that all @typedef and @namespace tags have @property tags when their type is a plain object.
    // Correctness rules are enabled by default.

    // ✅ jsdoc/require-property-description
    // Requires that all @property tags have descriptions.
    // Correctness rules are enabled by default.

    // ✅ jsdoc/require-property-name
    // Requires that all @property tags have names.
    // Correctness rules are enabled by default.

    // ✅ jsdoc/require-property-type
    // Requires that each @property tag has a type value (within curly brackets).
    // Correctness rules are enabled by default.

    // ✅ jsdoc/require-yields
    // Requires that yields are documented and reports duplicate @yields tags.
    // Correctness rules are enabled by default.

    // ----------------
    // Pedantic rules
    // ----------------

    // ✅ jsdoc/require-param
    // Requires that all function parameters are documented with JSDoc @param tags.
    // Honestly is a correctness rule.
    "jsdoc/require-param": "error",

    // ✅ jsdoc/require-param-description
    // Requires that each @param tag has a description value.
    // Honestly is a correctness rule.
    "jsdoc/require-param-description": "error",

    // ✅ jsdoc/require-param-name
    // Requires that all @param tags have names.
    // Honestly is a correctness rule.
    "jsdoc/require-param-name": "error",

    // ✅ jsdoc/require-param-type
    // Requires that each @param tag has a type value (within curly brackets).
    // Honestly is a correctness rule.
    "jsdoc/require-param-type": "error",

    // ✅ jsdoc/require-returns
    // Requires that return statements are documented and reports duplicate @returns tags.
    // Honestly is a correctness rule.
    "jsdoc/require-returns": "error",

    // ✅ jsdoc/require-returns-description
    // Requires that the @returns tag has a description value.
    // Honestly is a correctness rule.
    "jsdoc/require-returns-description": "error",

    // ✅ jsdoc/require-returns-type
    // Requires that the @returns tag has a type value (in curly brackets).
    // Honestly is a correctness rule.
    "jsdoc/require-returns-type": "error",

    // ✅ jsdoc/require-throws-type
    // Requires a type on the @throws tag.
    // Honestly is a correctness rule.
    "jsdoc/require-throws-type": "error",

    // ✅ jsdoc/require-yields-type
    // Requires a type on the @yields tag.
    // Honestly is a correctness rule.
    "jsdoc/require-yields-type": "error",

    // --------------------
    // Restriction rules
    // --------------------

    // ✅ jsdoc/check-access
    // Checks that @access tags use one of the supported visibility values.
    // Honestly is a correctness rule.
    "jsdoc/check-access": "error",

    // ✅ jsdoc/empty-tags
    // Expects tags like @abstract, @async, @generator, @global, and @ignore to be empty.
    // Honestly is a correctness rule.
    "jsdoc/empty-tags": "error",

    // -----------------
    // Style rules
    // -----------------

    // ✅ jsdoc/no-blank-blocks
    // Reports and optionally removes JSDoc blocks that contain only whitespace.
    // Useful cleanup.
    "jsdoc/no-blank-blocks": "error",

    // ✅ jsdoc/require-throws-description
    // Requires a description for @throws tags.
    // Honestly is a correctness rule.
    "jsdoc/require-throws-description": "error",

    // ✅ jsdoc/require-yields-description
    // Requires a description for @yields tags.
    // Honestly is a correctness rule.
    "jsdoc/require-yields-description": "error",
  },
} satisfies OxlintConfig;
