import type { OxlintConfig } from 'oxlint';

export const reactCorrectness = {
  rules: {
    // ✅ react/exhaustive-deps
    // Verifies the list of dependencies for hooks like `useEffect` and similar.
    // 🐛 Bug prevention.
    'react/exhaustive-deps': 'error',

    // ✅ react/forward-ref-uses-ref
    // Requires that components wrapped with `forwardRef` must have a `ref` parameter.
    // Omitting the ref argument is usually a bug, and components not using `ref` don't need to be wrapped by
    // `forwardRef`.
    // 🏆 Best practice.
    'react/forward-ref-uses-ref': 'error',

    // ✅ react/jsx-key
    // Enforce key prop for elements in an array.
    // 🐛 Bug prevention.
    'react/jsx-key': 'error',

    // ❌ react/jsx-no-duplicate-props
    // This rule prevents duplicate props in JSX elements.
    // ➡️ Handled by TypeScript (TS17001).

    // ❌ react/jsx-no-undef
    // Disallow undeclared variables in JSX.
    // ➡️ Handled by TypeScript (TS2304).

    // ✅ react/jsx-props-no-spread-multi
    // Enforces that any unique expression is only spread once.
    // 🐛 Bug prevention.
    'react/jsx-props-no-spread-multi': 'error',

    // ✅ react/no-children-prop
    // Checks that `children` are not passed using a prop.
    // 🏆 Best practice.
    'react/no-children-prop': 'error',

    // ✅ react/no-danger-with-children
    // Disallows DOM elements from using both `children` and `dangerouslySetInnerHTML` properties.
    // 🐛 Bug prevention.
    'react/no-danger-with-children': 'error',

    // ❌ react/no-did-mount-set-state
    // Disallows using `setState` in the `componentDidMount` lifecycle method.
    // ➡️ Handled by react/prefer-function-component.

    // ❌ react/no-did-update-set-state
    // Disallow usage of `setState` in `componentDidUpdate`.
    // ➡️ Handled by react/prefer-function-component.

    // ❌ react/no-direct-mutation-state
    // This rule forbids the direct mutation of `this.state` in React components.
    // ➡️ Handled by react/prefer-function-component.

    // ❌ react/no-find-dom-node
    // This rule disallows the use of `findDOMNode`, which was deprecated in 2018.
    // ➡️ Handled by React 19.

    // ❌ react/no-is-mounted
    // This rule prevents using `isMounted` in class components.
    // ➡️ Handled by react/prefer-function-component.

    // ❌ react/no-render-return-value
    // This rule will warn you if you try to use the `ReactDOM.render()` return value.
    // ➡️ Handled by react/prefer-function-component.

    // ❌ react/no-string-refs
    // This rule prevents using the deprecated behavior of string literals in `ref` attributes.
    // ➡️ Handled by React 19.

    // ❌ react/no-this-in-sfc
    // Prevents using this in stateless functional components.
    // ➡️ Handled by TypeScript (TS2683).

    // ❌ react/no-unsafe
    // This rule identifies and restricts the use of unsafe React lifecycle methods.
    // ➡️ Handled by react/prefer-function-component.

    // ❌ react/no-will-update-set-state
    // Disallows using setState in the componentWillUpdate lifecycle method.
    // ➡️ Handled by react/prefer-function-component.

    // ✅ react/void-dom-elements-no-children
    // Disallow void DOM elements (e.g. `<img />`, `<br />`, `<hr />`) from receiving children.
    // 🏆 Best practice.
    'react/void-dom-elements-no-children': 'error',
  },
} satisfies OxlintConfig;
