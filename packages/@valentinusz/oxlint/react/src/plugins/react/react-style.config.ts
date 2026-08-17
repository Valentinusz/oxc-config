import type { OxlintConfig } from 'oxlint';

export const reactStyleConfig = {
  rules: {
    // ❌ react/function-component-definition
    // Enforces a consistent function form for React function components.
    // Superseded by eslint/func-style.

    // ✅ react/hook-use-state
    // Ensure destructuring and symmetric naming of useState hook value and setter variables.
    // Best practice.
    'react/hook-use-state': 'error',

    // ✅ react/jsx-boolean-value
    // Enforce a consistent boolean attribute style in your code.
    // Best practice.
    'react/jsx-boolean-value': 'error',

    // ✅ react/jsx-curly-brace-presence
    // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals
    // in JSX children or attributes.
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        propElementValues: 'always',
        children: 'never',
      },
    ],

    // ✅ react/jsx-fragments
    // Enforces the shorthand or standard form for React Fragments.
    // Best practice.
    'react/jsx-fragments': 'error',

    // ❌ react/jsx-handler-names
    // Ensures that any component or prop methods used to handle events are correctly prefixed.
    // Useful but rule too restrictive of non-event handler callbacks.

    // ❌ react/jsx-max-depth
    // Enforces a maximum depth for nested JSX elements and fragments.
    // Too restrictive.

    // ✅ react/jsx-pascal-case
    // Enforce PascalCase for user-defined JSX components.
    // Best practice.
    'react/jsx-pascal-case': 'error',

    // ❌ react/jsx-props-no-spreading
    // Disallow JSX prop spreading.
    // Too restrictive.

    // ❌ react/no-redundant-should-component-update
    // Disallow usage of shouldComponentUpdate when extending React.PureComponent.
    // Class components are forbidden.

    // ❌ react/no-set-state
    // Disallow the usage of this.setState in React components.
    // Class components are forbidden.

    // ❌ react/prefer-es6-class
    // React offers you two ways to create traditional components: using the create-react-class package or the newer ES2015 class system.
    // Class components are forbidden.

    // ✅ react/self-closing-comp
    // Detects components without children which can be self-closed to avoid unnecessary extra closing tags.
    // More readable.
    'react/self-closing-comp': 'error',

    // ❌ react/state-in-constructor
    // Enforces the state initialization style to be either in a constructor or with a class property.
    // Class components are forbidden.
  },
} satisfies OxlintConfig;
