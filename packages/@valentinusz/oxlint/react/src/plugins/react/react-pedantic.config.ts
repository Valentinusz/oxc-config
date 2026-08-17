import type { OxlintConfig } from "oxlint";

export const reactPedanticConfig = {
  rules: {
    // ✅ react/checked-requires-onchange-or-readonly
    // This rule enforces onChange or readOnly attribute for checked property of input elements. It also warns when
    // checked and defaultChecked properties are used together.
    // Prevents errors.
    "react/checked-requires-onchange-or-readonly": "error",

    // ✅ react/display-name
    // Enforces that React components have a displayName property.
    // Improves debugging.
    "react/display-name": "error",

    // ✅ react/jsx-no-target-blank
    // This rule aims to prevent user-generated link hrefs and form actions from creating security vulnerabilities by
    // requiring `rel='noreferrer'` for external link hrefs and form actions, and optionally any dynamically generated
    // link hrefs and form actions.
    // Using `target='_blank'` without `rel='noreferrer'` is a security vulnerability.
    "react/jsx-no-target-blank": "error",

    // ✅ react/jsx-no-useless-fragment
    // Disallow unnecessary fragments.
    "react/jsx-no-useless-fragment": "error",

    // ✅ react/no-unescaped-entities
    // This rule prevents characters that you may have meant as JSX escape characters from being accidentally injected as a text node in JSX statements.
    "react/no-unescaped-entities": "error",

    // ✅ react/rules-of-hooks
    // Enforces the Rules of Hooks, ensuring that React Hooks are only called in valid contexts and in the correct order.
    // More readable.
    "react/rules-of-hooks": "error",
  },
} satisfies OxlintConfig;
