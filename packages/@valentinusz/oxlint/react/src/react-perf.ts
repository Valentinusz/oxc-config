import type { OxlintConfig } from "oxlint";

export const reactPerfConfig = {
  plugins: ["react-perf"],
  rules: {
    // -----------------
    // Perf rules
    // -----------------

    // ✅ react-perf/jsx-no-jsx-as-prop
    // Prevent JSX elements that are local to the current method from being used as values of JSX props.
    "react-perf/jsx-no-jsx-as-prop": "error",

    // ✅ react-perf/jsx-no-new-array-as-prop
    // Prevent arrays that are local to the current method from being used as values of JSX props.
    "react-perf/jsx-no-new-array-as-prop": "error",

    // ✅ react-perf/jsx-no-new-function-as-prop
    // Prevent functions that are local to the current method from being used as values of JSX props.
    "react-perf/jsx-no-new-function-as-prop": "error",

    // ✅ react-perf/jsx-no-new-object-as-prop
    // Prevent objects that are local to the current method from being used as values of JSX props.
    "react-perf/jsx-no-new-object-as-prop": "error",
  },
} satisfies OxlintConfig;
