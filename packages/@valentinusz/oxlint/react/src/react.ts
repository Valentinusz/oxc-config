import type { OxlintConfig } from "oxlint";

export const reactConfig = {
  plugins: ["react"],
  rules: {
    // -----------------
    // Correctness rules
    // -----------------

    // ✅ react/exhaustive-deps
    // Verifies the list of dependencies for Hooks like useEffect and similar.
    "react/exhaustive-deps": "error",

    // ✅ react/forward-ref-uses-ref
    // Requires that components wrapped with forwardRef must have a ref parameter. Omitting the ref argument is usually a bug, and components not using ref don&#39;t need to be wrapped by forwardRef.
    "react/forward-ref-uses-ref": "error",

    // ✅ react/jsx-key
    // Enforce key prop for elements in an array.
    "react/jsx-key": "error",

    // ✅ react/jsx-no-duplicate-props
    // This rule prevents duplicate props in JSX elements.
    "react/jsx-no-duplicate-props": "error",

    // ✅ react/jsx-no-undef
    // Disallow undeclared variables in JSX.
    "react/jsx-no-undef": "error",

    // ✅ react/jsx-props-no-spread-multi
    // Enforces that any unique expression is only spread once.
    "react/jsx-props-no-spread-multi": "error",

    // ✅ react/no-children-prop
    // Checks that children are not passed using a prop.
    "react/no-children-prop": "error",

    // ✅ react/no-danger-with-children
    // Disallows DOM elements from using both children and dangerouslySetInnerHTML properties.
    "react/no-danger-with-children": "error",

    // ✅ react/no-did-mount-set-state
    // Disallows using setState in the componentDidMount lifecycle method.
    "react/no-did-mount-set-state": "error",

    // ✅ react/no-did-update-set-state
    // Disallow usage of setState in componentDidUpdate.
    "react/no-did-update-set-state": "error",

    // ✅ react/no-direct-mutation-state
    // This rule forbids the direct mutation of this.state in React components.
    "react/no-direct-mutation-state": "error",

    // ✅ react/no-find-dom-node
    // This rule disallows the use of findDOMNode, which was deprecated in 2018 and removed in React 19.
    "react/no-find-dom-node": "error",

    // ✅ react/no-is-mounted
    // This rule prevents using isMounted in class components.
    "react/no-is-mounted": "error",

    // ✅ react/no-render-return-value
    // This rule will warn you if you try to use the ReactDOM.render() return value.
    "react/no-render-return-value": "error",

    // ✅ react/no-string-refs
    // This rule prevents using the deprecated behavior of string literals in ref attributes.
    "react/no-string-refs": "error",

    // ✅ react/no-this-in-sfc
    // Prevents using this in stateless functional components.
    "react/no-this-in-sfc": "error",

    // ✅ react/no-unsafe
    // This rule identifies and restricts the use of unsafe React lifecycle methods.
    "react/no-unsafe": "error",

    // ✅ react/no-will-update-set-state
    // Disallows using setState in the componentWillUpdate lifecycle method.
    "react/no-will-update-set-state": "error",

    // ✅ react/void-dom-elements-no-children
    // Disallow void DOM elements (e.g. &lt;img /&gt;, &lt;br /&gt;) from receiving children.
    "react/void-dom-elements-no-children": "error",
    // -----------------
    // Nursery rules
    // -----------------

    // ✅ react/react-compiler
    // Runs the React Compiler&#39;s analysis in lint-only mode and reports code that violates the Rules of React — for example calling hooks conditionally, calling setState during render, accessing refs during render, or mutating props and state.
    "react/react-compiler": "error",

    // ✅ react/require-render-return
    // Require render methods in ES5 and ES2015 React components to return a value.
    "react/require-render-return": "error",
    // -----------------
    // Pedantic rules
    // -----------------

    // ✅ react/checked-requires-onchange-or-readonly
    // This rule enforces onChange or readOnly attribute for checked property of input elements. It also warns when checked and defaultChecked properties are used together.
    "react/checked-requires-onchange-or-readonly": "error",

    // ✅ react/display-name
    // Enforces that React components have a displayName property.
    "react/display-name": "error",

    // ✅ react/jsx-no-target-blank
    // This rule aims to prevent user-generated link hrefs and form actions from creating security vulnerabilities by requiring rel=&#39;noreferrer&#39; for external link hrefs and form actions, and optionally any dynamically generated link hrefs and form actions.
    "react/jsx-no-target-blank": "error",

    // ✅ react/jsx-no-useless-fragment
    // Disallow unnecessary fragments.
    "react/jsx-no-useless-fragment": "error",

    // ✅ react/no-unescaped-entities
    // This rule prevents characters that you may have meant as JSX escape characters from being accidentally injected as a text node in JSX statements.
    "react/no-unescaped-entities": "error",

    // ✅ react/rules-of-hooks
    // Enforces the Rules of Hooks, ensuring that React Hooks are only called in valid contexts and in the correct order.
    "react/rules-of-hooks": "error",
    // -----------------
    // Perf rules
    // -----------------

    // ✅ react/jsx-no-constructed-context-values
    // Disallows JSX context provider values that cause needless re-renders.
    "react/jsx-no-constructed-context-values": "error",

    // ✅ react/no-array-index-key
    // Warn if an element uses an Array index in its key.
    "react/no-array-index-key": "error",

    // ✅ react/no-object-type-as-default-prop
    // Disallows using object, array, function, class, regex, JSX, or new-constructed values as default values for destructured React component props.
    "react/no-object-type-as-default-prop": "error",
    // -----------------
    // Restriction rules
    // -----------------

    // ✅ react/button-has-type
    // Enforces an explicit type attribute for all HTML button elements.
    "react/button-has-type": "error",

    // ✅ react/forbid-component-props
    // This rule prevents passing of props to components. This rule only applies to Components (e.g. &lt;Foo /&gt;) and not DOM nodes (e.g. &lt;div /&gt;). By default this rule prevents passing of props that add lots of complexity (className, style) to Components. The list of forbidden props can be customized with the forbid option.
    "react/forbid-component-props": "error",

    // ✅ react/forbid-dom-props
    // This rule prevents passing of props to elements. This rule only applies to DOM Nodes (e.g. &lt;div /&gt;) and not Components (e.g. &lt;Component /&gt;). The list of forbidden props can be customized with the forbid option.
    "react/forbid-dom-props": "error",

    // ✅ react/forbid-elements
    // Allows you to configure a list of forbidden elements and to specify their desired replacements.
    "react/forbid-elements": "error",

    // ✅ react/jsx-filename-extension
    // Enforces consistent use of the .jsx file extension.
    "react/jsx-filename-extension": "error",

    // ✅ react/jsx-no-literals
    // Disallows usage of unwrapped string literals inside JSX, such as text children of a JSX element or string-valued props.
    "react/jsx-no-literals": "error",

    // ✅ react/no-clone-element
    // Prevents the usage of React.cloneElement, which is considered an anti-pattern in React.
    "react/no-clone-element": "error",

    // ✅ react/no-danger
    // This rule prevents the use of dangerouslySetInnerHTML prop.
    "react/no-danger": "error",

    // ✅ react/no-multi-comp
    // Prevents multiple React components from being defined in the same file.
    "react/no-multi-comp": "error",

    // ✅ react/no-react-children
    // Disallows the usage of React.Children, as it is considered a bad practice.
    "react/no-react-children": "error",

    // ✅ react/no-unknown-property
    // Disallow usage of unknown DOM properties.
    "react/no-unknown-property": "error",

    // ✅ react/only-export-components
    // Ensures that modules only export React components (and related HMR-safe items) so that Fast Refresh (a.k.a. hot reloading) can safely preserve component state. Concretely, it validates the shape of your module’s exports and common entrypoints (e.g. createRoot(...).render(&lt;App /&gt;)) to match what integrations like react-refresh expect.
    "react/only-export-components": "error",

    // ✅ react/prefer-function-component
    // Enforces that React components are written as function components instead of class components.
    "react/prefer-function-component": "error",
    // -----------------
    // Style rules
    // -----------------

    // ✅ react/function-component-definition
    // Enforces a consistent function form for React function components.
    "react/function-component-definition": "error",

    // ✅ react/hook-use-state
    // Ensure destructuring and symmetric naming of useState hook value and setter variables.
    "react/hook-use-state": "error",

    // ✅ react/jsx-boolean-value
    // Enforce a consistent boolean attribute style in your code.
    "react/jsx-boolean-value": "error",

    // ✅ react/jsx-curly-brace-presence
    // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
    "react/jsx-curly-brace-presence": "error",

    // ✅ react/jsx-fragments
    // Enforces the shorthand or standard form for React Fragments.
    "react/jsx-fragments": "error",

    // ✅ react/jsx-handler-names
    // Ensures that any component or prop methods used to handle events are correctly prefixed.
    "react/jsx-handler-names": "error",

    // ✅ react/jsx-max-depth
    // Enforces a maximum depth for nested JSX elements and fragments.
    "react/jsx-max-depth": "error",

    // ✅ react/jsx-pascal-case
    // Enforce PascalCase for user-defined JSX components.
    "react/jsx-pascal-case": "error",

    // ✅ react/jsx-props-no-spreading
    // Disallow JSX prop spreading.
    "react/jsx-props-no-spreading": "error",

    // ✅ react/no-redundant-should-component-update
    // Disallow usage of shouldComponentUpdate when extending React.PureComponent.
    "react/no-redundant-should-component-update": "error",

    // ✅ react/no-set-state
    // Disallow the usage of this.setState in React components.
    "react/no-set-state": "error",

    // ✅ react/prefer-es6-class
    // React offers you two ways to create traditional components: using the create-react-class package or the newer ES2015 class system.
    "react/prefer-es6-class": "error",

    // ✅ react/self-closing-comp
    // Detects components without children which can be self-closed to avoid unnecessary extra closing tags.
    "react/self-closing-comp": "error",

    // ✅ react/state-in-constructor
    // Enforces the state initialization style to be either in a constructor or with a class property.
    "react/state-in-constructor": "error",
    // -----------------
    // Suspicious rules
    // -----------------

    // ✅ react/iframe-missing-sandbox
    // Enforce the sandbox attribute on iframe elements.
    "react/iframe-missing-sandbox": "error",

    // ✅ react/jsx-no-comment-textnodes
    // This rule prevents comment strings (e.g. beginning with // or /*) from being accidentally injected as a text node in JSX statements.
    "react/jsx-no-comment-textnodes": "error",

    // ✅ react/jsx-no-script-url
    // Disallow usage of javascript: URLs.
    "react/jsx-no-script-url": "error",

    // ✅ react/no-namespace
    // Enforce that namespaces are not used in React elements.
    "react/no-namespace": "error",

    // ✅ react/no-unstable-nested-components
    // Disallows defining React components inside other components.
    "react/no-unstable-nested-components": "error",

    // ✅ react/react-in-jsx-scope
    // Enforces that React is imported and in-scope when using JSX syntax.
    "react/react-in-jsx-scope": "error",

    // ✅ react/style-prop-object
    // Require that the value of the prop style be an object or a variable that is an object.
    "react/style-prop-object": "error",
  },
} satisfies OxlintConfig;
