import type { OxlintConfig } from "oxlint";

export const reactSuspiciousConfig = {
  rules: {
    // ✅ react/iframe-missing-sandbox
    // Enforce the sandbox attribute on iframe elements.
    // Security.
    "react/iframe-missing-sandbox": "error",

    // ✅ react/jsx-no-comment-textnodes
    // This rule prevents comment strings (e.g. beginning with // or /*) from being accidentally injected as a text node
    // in JSX statements.
    "react/jsx-no-comment-textnodes": "error",

    // ❌ react/jsx-no-script-url
    // Disallow usage of `javascript:` URLs.
    // Superseded by React 19.

    // ❌ react/no-namespace
    // Enforce that namespaces are not used in React elements.
    // Unsupported feature.

    // ✅ react/no-unstable-nested-components
    // Disallows defining React components inside other components.
    // Performance.
    "react/no-unstable-nested-components": "error",

    // ❌ react/react-in-jsx-scope
    // Enforces that React is imported and in-scope when using JSX syntax.
    // No longer needed in React 17+.

    // ❌ react/style-prop-object
    // Require that the value of the prop style be an object or a variable that is an object.
    // Superseded by TypeScript (TS2559).
  },
} satisfies OxlintConfig;
