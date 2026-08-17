import type { OxlintConfig } from "oxlint";

export const reactCorrectnessConfig = {
  rules: {
    // ✅ react/exhaustive-deps
    // Verifies the list of dependencies for hooks like `useEffect` and similar.

    // ✅ react/forward-ref-uses-ref
    // Requires that components wrapped with `forwardRef` must have a `ref` parameter.
    // Omitting the ref argument is usually a bug, and components not using `ref` don't need to be wrapped by
    // `forwardRef`.

    // ✅ react/jsx-key
    // Enforce key prop for elements in an array.

    // ❌ react/jsx-no-duplicate-props
    // This rule prevents duplicate props in JSX elements.
    // Superseded by TypeScript (TS17001).
    "react/jsx-no-duplicate-props": "off",

    // ❌ react/jsx-no-undef
    // Disallow undeclared variables in JSX.
    // Superseded by TypeScript (TS2304).
    "react/jsx-no-undef": "off",

    // ✅ react/jsx-props-no-spread-multi
    // Enforces that any unique expression is only spread once.

    // ✅ react/no-children-prop
    // Checks that `children` are not passed using a prop.

    // ✅ react/no-danger-with-children
    // Disallows DOM elements from using both `children` and `dangerouslySetInnerHTML` properties.

    // ❌ react/no-did-mount-set-state
    // Disallows using `setState` in the `componentDidMount` lifecycle method.
    // Class components are forbidden.
    "react/no-did-mount-set-state": "off",

    // ❌ react/no-did-update-set-state
    // Disallow usage of `setState` in `componentDidUpdate`.
    // Class components are forbidden.
    "react/no-did-update-set-state": "off",

    // ❌ react/no-direct-mutation-state
    // This rule forbids the direct mutation of `this.state` in React components.
    // Class components are forbidden.
    "react/no-direct-mutation-state": "off",

    // ❌ react/no-find-dom-node
    // This rule disallows the use of `findDOMNode`, which was deprecated in 2018.
    // Feature removed in React 19.
    "react/no-find-dom-node": "off",

    // ❌ react/no-is-mounted
    // This rule prevents using `isMounted` in class components.
    // Class components are forbidden.
    "react/no-is-mounted": "off",

    // ❌ react/no-render-return-value
    // This rule will warn you if you try to use the `ReactDOM.render()` return value.
    // Class components are forbidden.
    "react/no-render-return-value": "off",

    // ❌ react/no-string-refs
    // This rule prevents using the deprecated behavior of string literals in `ref` attributes.
    // Feature removed in React 19.
    "react/no-string-refs": "off",

    // ❌ react/no-this-in-sfc
    // Prevents using this in stateless functional components.
    // Superseded by TypeScript (TS2683).
    "react/no-this-in-sfc": "off",

    // ❌ react/no-unsafe
    // This rule identifies and restricts the use of unsafe React lifecycle methods.
    // Class components are forbidden.
    "react/no-unsafe": "off",

    // ❌ react/no-will-update-set-state
    // Disallows using setState in the componentWillUpdate lifecycle method.
    // Class components are forbidden.
    "react/no-will-update-set-state": "off",

    // ✅ react/void-dom-elements-no-children
    // Disallow void DOM elements (e.g. `<img />`, `<br />`, `<hr />`) from receiving children.
    "react/void-dom-elements-no-children": "error",
  },
} satisfies OxlintConfig;
