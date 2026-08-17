import type { OxlintConfig } from "oxlint";

export const jsdocRestrictionConfig = {
  rules: {
    // ✅ jsdoc/check-access
    // Checks that @access tags use one of the supported visibility values.
    // Honestly is a correctness rule.
    "jsdoc/check-access": "error",

    // ✅ jsdoc/empty-tags
    // Expects tags like @abstract, @async, @generator, @global, and @ignore to be empty.
    // Honestly is a correctness rule.
    "jsdoc/empty-tags": "error",
  },
} satisfies OxlintConfig;
