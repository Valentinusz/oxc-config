import type { OxlintConfig } from 'oxlint';

export const reactRestrictionConfig = {
  rules: {
    // ❌ react/button-has-type
    // Enforces an explicit type attribute for all HTML button elements.
    // A Button wrapper setting this should already exist or be created.

    // ❌ react/forbid-component-props
    // This rule prevents passing of props to components. This rule only applies to component sand not DOM nodes
    // By default this rule prevents passing of props that add lots of complexity (className, style) to components.
    // The list of forbidden props can be customized with the forbid option.
    // Useful, but should be set on a project-level.

    // ❌ react/forbid-dom-props
    // This rule prevents passing of props to elements. This rule only applies to DOM Nodes and not components. The list
    // of forbidden props can be customized with the forbid option.
    // Useful, but should be set on a project-level.

    // ❌ react/forbid-elements
    // Allows you to configure a list of forbidden elements and to specify their desired replacements.
    // Useful, but should be set on a project-level.

    // ❌ react/jsx-filename-extension
    // Enforces consistent use of the .jsx file extension.
    // Superseded by TypeScript (tsc can only handle files ending in .tsx).

    // ❌ react/jsx-no-literals
    // Disallows usage of unwrapped string literals inside JSX, such as text children of a JSX element or string-valued
    // props.
    // Not useful enough.

    // ✅ react/no-clone-element
    // Prevents the usage of React.cloneElement, which is considered an antipattern in React.
    // Prevents bad practice.
    'react/no-clone-element': 'error',

    // ✅ react/no-danger
    // This rule prevents the use of dangerouslySetInnerHTML prop.
    // Prevents bad practice.
    'react/no-danger': 'error',

    // ❌ react/no-multi-comp
    // Prevents multiple React components from being defined in the same file.
    // Too restrictive.

    // ✅ react/no-react-children
    // Disallows the usage of React.Children, as it is considered a bad practice.
    // Prevents bad practice.
    'react/no-react-children': 'error',

    // ❌ react/no-unknown-property
    // Disallow usage of unknown DOM properties.
    // Superseded by TypeScript (TS2322).

    // ✅ react/only-export-components
    // Ensures that modules only export React components (and related HMR-safe items) so that Fast Refresh
    // (a.k.a. hot reloading) can safely preserve component state. Concretely, it validates the shape of your module’s
    // exports and common entry points (e.g. `createRoot(...).render(<App />)`) to match what integrations like
    // react-refresh expect.
    // This rule is very useful but usually needs tweaking when using external libraries.
    'react/only-export-components': 'error',

    // ✅ react/prefer-function-component
    // Enforces that React components are written as function components instead of class components.
    // Best practice.
    'react/prefer-function-component': 'error',
  },
} satisfies OxlintConfig;
