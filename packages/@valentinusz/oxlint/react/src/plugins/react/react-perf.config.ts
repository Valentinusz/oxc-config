import type { OxlintConfig } from "oxlint";

export const reactPerfConfig = {
  rules: {
    // ✅ react/jsx-no-constructed-context-values
    // Disallows JSX context provider values that cause needless re-renders.
    // Best practice. Context values should be memoized or declared outside the component.
    "react/jsx-no-constructed-context-values": "error",

    // ✅ react/no-array-index-key
    // Warn if an element uses an Array index in its key.
    // Best practice. If the array is sorted or an element is prepended an index-based list will fully rerender.
    "react/no-array-index-key": "error",

    // ✅ react/no-object-type-as-default-prop
    // 🏭 Superseded if React Compiler is used.
    // Disallows using object, array, function, class, regex, JSX, or new-constructed values as default values for
    // destructured React component props.
    // This creates a new reference on every render causing unnecessary rerenders.
    "react/no-object-type-as-default-prop": "error",
  },
} satisfies OxlintConfig;
