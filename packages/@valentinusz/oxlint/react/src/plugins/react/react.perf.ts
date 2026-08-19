import type { OxlintConfig } from 'oxlint';

export const reactPerf = {
  rules: {
    // ✅ react/jsx-no-constructed-context-values
    // Disallows JSX context provider values that cause needless re-renders.
    // ⚡ Performance. Context values should be memoized or declared outside the component.
    'react/jsx-no-constructed-context-values': 'error',

    // ✅ react/no-array-index-key
    // Warn if an element uses an Array index in its key.
    // ⚡ Performance. If the array is sorted or an element is prepended an index-based list will fully rerender.
    'react/no-array-index-key': 'error',

    // ✅ react/no-object-type-as-default-prop
    // Disallows using object, array, function, class, regex, JSX, or new-constructed values as default values for
    // destructured React component props.
    // ⚡ Performance. This creates a new reference on every render causing unnecessary rerenders.
    // ➡️ Handled by React Compiler if enabled.
    'react/no-object-type-as-default-prop': 'error',
  },
} satisfies OxlintConfig;
